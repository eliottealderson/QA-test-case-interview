import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage.mjs';
import Config from "../../config.mjs";
import logger from "../../services/logger.mjs";
import { waitForNavigation } from '../testHelpers.mjs';

const { USERNAME } = Config;
const TEST_FAILED_STATUS = 'failed';

/**
 * @file This test suite contains all the tests related to password recovery.
 */

test.describe('@password-recovery-tests', () => {
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
     * Test: A user should be redirected to the password recovery page when they click on 'forgot password'
     */
    test('should navigate to password recovery page when forgot password is clicked', async ({ page }) => {
        test.info().annotations.push({ type: 'test-LP7', description: 'vérifie que l\'utilisateur est correctement redirigé vers la page de récupération du \n' +
                'mot de passe lorsqu\'il clique sur le lien "Mot de passe oublié" sur la page de connexion.' });

        await loginPage.fillEmailField(page, USERNAME);
        const continueButtonVisible = await page.isVisible('[data-testid="loginContinueButton"]');
        expect(continueButtonVisible).toBeTruthy();
        await page.click('[data-testid="loginContinueButton"]');

        await loginPage.clickForgotPassword(page);
        await waitForNavigation(page);

        expect(await loginPage.isPasswordRecoveryPageVisible(page)).toBeTruthy();
    })

    /**
     * Tear down each test: log error if the test failed
     */
    test.afterEach(async ({ page }, testInfo) => {
        if (testInfo.status === TEST_FAILED_STATUS) {
            const { error } = testInfo;
            logger.error('An error occurred during the test:', error);
        }
    });
});