import Config from '../config.mjs';
import playwright from 'playwright';
const { Page } = playwright;
import { createLogger, format, transports } from 'winston';

import axios from 'axios';

/**
 * Class representing a login page.
 *
 * La classe LoginPage encapsule les fonctionnalités de la page de connexion.
 * Elle utilise l'architecture Page Object pour isoler les opérations sur la page de connexion
 * de l'implémentation sous-jacente. Cela rend le code plus facile à maintenir et à réutiliser.
 *
 * @example
 * const page = await browser.newPage();
 * const loginPage = new LoginPage(page);
 * await loginPage.fillLoginForm('user@example.com', 'password');
 * await loginPage.submitLoginForm();
 * const isLoggedIn = await loginPage.isLoggedIn();
 *
 * @see {@link https://playwright.dev/docs/pom/|Playwright Page Object Model} pour plus de détails sur
 * l'architecture Page Object.
 *
 * @class
 */
class LoginPage {
    /**
     * Create a LoginPage.
     *
     * intègre des rapports et des journaux détaillés à l'aide de la bibliothèque mochawesome pour les rapports HTML
     * et winston pour les journaux
     *
     * @param {Object} page - The Playwright page object.
     */
    constructor() {
        this.logger = createLogger({
            level: 'info',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
            ),
            transports: [new transports.Console()]
        });
    }

    /**
     * Navigate to the login page.
     * @async
     */
    async navigateToLoginPage(page) {
        const url = Config.BASE_URL + Config.LOGIN_ENDPOINT;
        this.logger.info('Navigating to ' + url);
        await page.goto(url);
        this.logger.info(`Navigated to ${url}`);
    }

    /**
     * Temporarily hide the overlay
     * @async
     */
    async hideOverlay(page) {
        await page.evaluate(() => {
            const overlay = document.querySelector('.truste_overlay');
            overlay && (overlay.style.display = 'none');
        });
    }

    /**
     * Show the overlay again
     * @async
     */
    async showOverlay(page) {
        await page.evaluate(() => {
            const overlay = document.querySelector('.truste_overlay');
            overlay && (overlay.style.display = 'block');
        });
    }

    /**
     * Handle the pop-up if it is detected.
     * @async
     */
    async handlePopin(page) {
        const popinSelector = 'iframe[name="trustarc_cm"]';
        const iframe = await page.waitForSelector(popinSelector);
        const popinFrame = await iframe.contentFrame();

        const mainContentSelector = '.mainContent';
        const popin = await popinFrame.waitForSelector(mainContentSelector);

        if (popin) {
            const refuseButtonSelector = '.pdynamicbutton .required';

            // Temporarily hide the overlay
            await this.hideOverlay(page);

            const refuseButton = await popinFrame.waitForSelector(refuseButtonSelector, { state: 'visible' });

            // Attendre que la navigation soit terminée après le clic sur le bouton
            await Promise.all([
                page.waitForNavigation(), // The promise resolves after navigation has finished
                refuseButton.click(), // Clicking the button will indirectly cause a navigation
            ]);

            // Show the overlay again
            await this.showOverlay(page);
        }
    }

    /**
     * Fill the login form with the provided email and password.
     * @async
     */
    async fillLoginForm(page, email, password) {
        this.logger.info('Filling login form with email: ' + email);
        this.logger.info('Filling login form with password: ' + password);

        const emailInputSelector = '[data-testid="loginUsernameField"] input[type="email"]';
        const continueButtonSelector = '[data-testid="loginContinueButton"]';
        const passwordInputSelector = '[data-testid="loginPasswordField"] input[type="password"]';

        await page.waitForSelector(emailInputSelector, { state: 'visible' });
        await page.fill(emailInputSelector, email);

        // Récupérez le bouton ici avant son utilisation
        const continueButton = await page.$(continueButtonSelector);

        // Vérifiez que le bouton existe avant de l'utiliser
        if (continueButton) {
            // Pas de waitForNavigation ici
            await page.evaluate((button) => button.click(), continueButton);

            // Attendez que le champ du mot de passe soit visible
            await page.waitForSelector(passwordInputSelector, { state: 'visible' });

            // Maintenant que le champ du mot de passe est visible, nous pouvons le remplir
            await page.fill(passwordInputSelector, password);
        } else {
            this.logger.warn("The continue button does not exist on the page.");
        }
    }

    async fillEmailField(page, email) {
        const emailInputSelector = '[data-testid="loginUsernameField"] input[type="email"]';
        await page.waitForSelector(emailInputSelector, { state: 'visible' });
        await page.fill(emailInputSelector, email);
    }

    async isSignUpPageVisible(page) {
        const signUpFormSelector = '[data-testid="signUpForm"]';
        await page.waitForSelector(signUpFormSelector, { state: 'visible' });
        const signUpFormElement = await page.$(signUpFormSelector);

        if (signUpFormElement) {
            this.logger.info("SignUp page is visible.");
            return true;
        } else {
            this.logger.warn("SignUp page is not visible.");
            return false;
        }
    }

    /**
     * Submit the login form.
     * @async
     */
    async submitLoginForm(page) {
        this.logger.info('Submitting login form');

        const submitButtonSelector = '[data-testid="loginSubmitButton"]';
        await page.click(submitButtonSelector);
    }

    /**
     * Check if the user is logged in.
     * @async
     */
    // This selector corresponds to an element in the DOM that exists only when the user is logged in.
    // It's defined at the class level so it can be accessed both within the isLoggedIn() method and externally,
    // allowing other parts of the code to wait for this element or interact with it as needed.
    loggedInUserSelector = '[data-testid="dashboardMenu"]';

    async isLoggedIn(page) {
        this.logger.info('Checking if user is logged in');

        const loggedInUserElement = await page.$(this.loggedInUserSelector);
        return loggedInUserElement !== null;
    }

    async clickForgotPassword(page) {
        await page.click('a[href="/fr/set-new-password"]');
        this.logger.info('Clicked on "Mot de passe oublié ?" link');
    }

    async isPasswordRecoveryPageVisible(page) {
        return page.waitForSelector('.sc-gKXOVf', { timeout: 5000 }) !== null;
    }

    /**
     * Get the logged-in user.
     * @async
     */
    async getLoggedInUser(page) {
        // Click on the avatar button to reveal the user info
        await page.click('button[data-testid="mainHeaderAvatar"]');

        // Wait for the user info to be visible
        await page.waitForSelector('.MuiListItemText-primary strong');

        // Get the text
        const loggedInUser = await page.$eval('.MuiListItemText-primary strong', el => el.innerText);

        return loggedInUser;
    }
}

export default LoginPage;