import logger from "../services/logger.mjs";

async function loginAndCheckResult(page, loginPage, email, password, expectedResult) {
    await loginPage.fillLoginForm(page, email, password);
    await loginPage.submitLoginForm(page);
    return await loginPage.isLoggedIn(page) === expectedResult;
}

async function tryCatch(asyncFn) {
    try {
        const result = await asyncFn();
        return { result };
    } catch (error) {
        logger.error('Une erreur s\'est produite :', error);
        logger.error('Trace d\'appel :', error.stack);
        return { error };
    }
}

async function waitForNavigation(page) {
    const navigationPromise = page.waitForNavigation();
    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 5000)); // Délai de 5000 millisecondes (5 secondes)

    await Promise.race([navigationPromise, timeoutPromise]);
}

export { loginAndCheckResult, tryCatch, waitForNavigation };
