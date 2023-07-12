import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage.mjs';
import Config from "../../config.mjs";
import logger from "../../services/logger.mjs";
import { waitForNavigation } from '../testHelpers.mjs';

const { USERNAME, PASSWORD, UNKNOWN_USERNAME, INVALID_PASSWORD, INVALID_USERNAME } = Config;

test.describe.skip('Login tests', () => {

    const loginPage = new LoginPage();

    test.beforeEach(async ({ page }) => {
        await page.setDefaultTimeout(15000);
        await loginPage.navigateToLoginPage(page);
        logger.info('Checking for popin...');
        await loginPage.handlePopin(page);
    });

    /**
     * Test: The form should not be submitted with an invalid email
     */
    test('should not submit the form with invalid email', async ({ page }) => {
        await loginPage.fillEmailField(page, INVALID_USERNAME);
        const continueButtonVisible = await page.isVisible('[data-testid="loginContinueButton"]');
        expect(continueButtonVisible).toBeTruthy();
        await page.click('[data-testid="loginContinueButton"]');
        expect(await page.isVisible('.sc-eFWqGp.Mui-error')).toBeTruthy();
    });

    /**
     * Test: The login page should not display the password field if the email is unknown, instead, it should show the SignUpPage
     */
    test('should not display password field with unknown email and show SignUpPage', async ({ page }) => {
        await loginPage.fillEmailField(page, UNKNOWN_USERNAME);
        const continueButtonVisible = await page.isVisible('[data-testid="loginContinueButton"]');
        expect(continueButtonVisible).toBeTruthy();
        await page.click('[data-testid="loginContinueButton"]');
        const signUpPageVisible = await loginPage.isSignUpPageVisible(page);
        expect(signUpPageVisible).toBe(true);
    });

    /**
     * Test: A user should not be able to login with a valid email but an invalid password
     */
    test('should not login with a valid email but invalid password', async ({ page }) => {
        await loginPage.fillLoginForm(page, USERNAME, INVALID_PASSWORD);
        await loginPage.submitLoginForm(page);
        expect(await loginPage.isLoggedIn(page)).toBeFalsy();
    });

    /**
     * Test: A user should be redirected to the password recovery page when they click on 'forgot password'
     */
    test('should navigate to password recovery page when forgot password is clicked', async ({ page }) => {
        await loginPage.fillEmailField(page, USERNAME);
        const continueButtonVisible = await page.isVisible('[data-testid="loginContinueButton"]');
        expect(continueButtonVisible).toBeTruthy();
        await page.click('[data-testid="loginContinueButton"]');

        await loginPage.clickForgotPassword(page);
        await waitForNavigation(page);

        expect(await loginPage.isPasswordRecoveryPageVisible(page)).toBeTruthy();
    });

    /**
     * Test: A user should be able to login with valid credentials
     */
    test('should login with valid credentials', async ({ page }) => {
        await loginPage.fillLoginForm(page, USERNAME, PASSWORD);
        await loginPage.submitLoginForm(page);
        await page.waitForSelector(loginPage.loggedInUserSelector);
        expect(await loginPage.isLoggedIn(page)).toBeTruthy();
        // Obtenir l'utilisateur connecté
        const loggedInUser = await loginPage.getLoggedInUser(page);
        expect(loggedInUser).toBe("Jules Vernie");

        logger.info('La connexion a réussi');
    });

    /**
     * Test: A user's session should be maintained after reconnection
     */
    test('should maintain user session after reconnection', async ({ page }) => {
        await loginPage.fillLoginForm(page, USERNAME, PASSWORD);
        await loginPage.submitLoginForm(page);
        await page.waitForSelector(loginPage.loggedInUserSelector);
        await page.reload();
        await page.waitForSelector(loginPage.loggedInUserSelector);
        expect(await loginPage.isLoggedIn(page)).toBeTruthy();
    });

    /**
     * Test: Stack trace logging
     */
    test('should demonstrate stack trace logging', async ({ page }) => {
        await loginPage.fillLoginForm(page, USERNAME, PASSWORD);
        await loginPage.submitLoginForm(page);
        try {
            await page.click('#invalidElement');
        } catch (error) {
            logger.error('Une erreur s\'est produite :', error);
            logger.error('Trace d\'appel :', error.stack);
        }
        expect(await loginPage.isLoggedIn(page)).toBeTruthy();
    });

    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status === 'failed') {
            const { error } = testInfo;
            logger.error('Une erreur s\'est produite pendant le test :', error);
        }
    });
});
