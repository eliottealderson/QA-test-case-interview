import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/LoginPage.mjs';
import Config from "../../config.mjs";
import logger from "../../services/logger.mjs";

const { USERNAME, PASSWORD } = Config;

const INVALID_ELEMENT_SELECTOR = '#invalidElement';
const TEST_FAILED_STATUS = 'failed';

/**
 * @file This test suite contains all the tests related to error handling and stack trace logging.
 */
test.describe('@error-handling-tests', () => {
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
     * Test: Stack trace logging
     */
    test('should demonstrate stack trace logging', async ({ page }) => {
        test.info().annotations.push({ type: 'test-LP1', description: 'vérifie le comportement de l\'application en cas d\'erreur et enregistre la trace de la pile \n' +
                'pour un suivi plus détaillé. ' });
        await loginPage.fillLoginForm(page, USERNAME, PASSWORD);
        await loginPage.submitLoginForm(page);
        let errorOccurred = false;
        try {
            await page.click(INVALID_ELEMENT_SELECTOR);
        } catch (error) {
            logger.error('An error occurred:', error);
            logger.error('Call stack:', error.stack);
            errorOccurred = true;
        }
        // We expect an error here, so the test passes when an error is thrown.
        expect(errorOccurred).toBeTruthy();

        if (!errorOccurred) {
            // Only check login status if no error occurred
            expect(await loginPage.isLoggedIn(page)).toBeTruthy();
        }
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
