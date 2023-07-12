import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage.mjs';
import Config from "../../config.mjs";
import logger from "../../services/logger.mjs";

const { USERNAME, PASSWORD, EXPECTED_USER_NAME } = Config;
const TEST_FAILED_STATUS = 'failed';

/**
 * @file This test suite contains all the tests related to successful login and user session persistence.
 */

test.describe('@successful-login-tests', () => {
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
     * Test: A user should be able to login with valid credentials
     */
    test('should login with valid credentials', async ({ page }) => {
        test.info().annotations.push({ type: 'test-LP5', description: 'vérifie que l\'utilisateur peut se connecter avec des identifiants valides et que la connexion est réussie.\n' });

        await loginPage.fillLoginForm(page, USERNAME, PASSWORD);
        await loginPage.submitLoginForm(page);
        await page.waitForSelector(loginPage.loggedInUserSelector);
        expect(await loginPage.isLoggedIn(page)).toBeTruthy();
        // Get the logged-in user
        const loggedInUser = await loginPage.getLoggedInUser(page);
        expect(loggedInUser).toBe(EXPECTED_USER_NAME);

        logger.info('Login successful');
    });

    /**
     * Test: A user's session should be maintained after reconnection
     */
    test('should maintain user session after reconnection', async ({ page }) => {
        test.info().annotations.push({ type: 'test-LP6', description: 'vérifie que la session utilisateur est maintenue après une reconnexion.\n' });

        await loginPage.fillLoginForm(page, USERNAME, PASSWORD);
        await loginPage.submitLoginForm(page);
        await page.waitForSelector(loginPage.loggedInUserSelector);
        await page.reload();
        await page.waitForSelector(loginPage.loggedInUserSelector);
        expect(await loginPage.isLoggedIn(page)).toBeTruthy();
    });

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