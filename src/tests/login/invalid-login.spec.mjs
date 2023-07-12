import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage.mjs';
import Config from "../../config.mjs";
import logger from "../../services/logger.mjs";

const { UNKNOWN_USERNAME, INVALID_PASSWORD, INVALID_USERNAME, USERNAME } = Config;
const LOGIN_CONTINUE_BUTTON_SELECTOR = '[data-testid="loginContinueButton"]';
const ERROR_CLASS_SELECTOR = '.sc-eFWqGp.Mui-error';
const TEST_FAILED_STATUS = 'failed';

/**
 * @file This test suite contains all the tests related to invalid login attempts.
 */
test.describe('@invalid-login-tests', () => {
    let loginPage;

    /**
     * Set up each test: set default timeout and navigate to login page.
     */
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage();
        await page.setDefaultTimeout(15000);
        await loginPage.navigateToLoginPage(page);
        logger.info('Checking for popin...');
        await loginPage.handlePopin(page);
    });

    /**
     * Test: The form should not be submitted with an invalid email
     */
    test('should not submit the form with invalid email', async ({ page }) => {
        test.info().annotations.push({ type: 'test-LP2', description: 'vérifie que le formulaire de connexion ne peut \n' +
                'pas être soumis avec un email invalide.' });

        await loginPage.fillEmailField(page, INVALID_USERNAME);
        const continueButtonVisible = await page.isVisible(LOGIN_CONTINUE_BUTTON_SELECTOR);
        expect(continueButtonVisible).toBeTruthy();
        await page.click(LOGIN_CONTINUE_BUTTON_SELECTOR);
        expect(await page.isVisible(ERROR_CLASS_SELECTOR)).toBeTruthy();
    });

    /**
     * Test: The login page should not display the password field if the email is unknown, instead, it should show the SignUpPage
     */
    test('should not display password field with unknown email and show SignUpPage', async ({ page }) => {
        test.info().annotations.push({ type: 'test-LP3', description: 'vérifie que la page de connexion n\'affiche pas le champ du mot de passe \n' +
                'lorsqu\'un email inconnu est saisi'});

        await loginPage.fillEmailField(page, UNKNOWN_USERNAME);
        const continueButtonVisible = await page.isVisible(LOGIN_CONTINUE_BUTTON_SELECTOR);
        expect(continueButtonVisible).toBeTruthy();
        await page.click(LOGIN_CONTINUE_BUTTON_SELECTOR);
        const signUpPageVisible = await loginPage.isSignUpPageVisible(page);
        expect(signUpPageVisible).toBe(true);
    });

    /**
     * Test: A user should not be able to login with a valid email but an invalid password
     */
    test('should not login with a valid email but invalid password', async ({ page }) => {
        test.info().annotations.push({ type: 'test-LP4', description: 'vérifie que la connexion échoue lorsque l\'utilisateur saisit un email \n' +
                'valide mais un mot de passe invalide.'});


        await loginPage.fillLoginForm(page, USERNAME, INVALID_PASSWORD);
        await loginPage.submitLoginForm(page);
        expect(await loginPage.isLoggedIn(page)).toBeFalsy();
    });

    /**
     * Tear down each test: log error if the test failed
     */
    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status === TEST_FAILED_STATUS) {
            const { error } = testInfo;
            logger.error('Une erreur s\'est produite pendant le test :', error);
        }
    });
});
