import { test, expect } from '@playwright/test';
import PasswordRecoveryPage from '../../pages/PasswordRecoveryPage.mjs';
import Config from "../../config.mjs";
import logger from "../../services/logger.mjs";

const { EMAIL } = Config;

test.describe('Password Recovery Error Handling Tests', () => {

});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status === 'failed') {
        const { error } = testInfo;
        logger.error('An error occurred during the password recovery test:', error);
    }
});
