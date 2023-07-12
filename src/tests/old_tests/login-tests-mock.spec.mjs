import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';
import { createLogger, format, transports } from 'winston';
import moxios from 'moxios';
import LoginPage from '../../pages/LoginPage.mjs';

test.describe('Test de connexion', () => {
    let browser, context, page;
    const baseUrl = process.env.BASE_URL || 'https://openclassrooms.com';
    const loginEndpoint = process.env.LOGIN_ENDPOINT || '/fr/login';
    const email = process.env.EMAIL || 'julesvernie@gmx.fr';
    const password = process.env.PASSWORD || 'wQLB7TcSBhLfo';

    test.beforeEach(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        await page.route('**', routeHandler); // Interception des appels réseau avec moxios
        moxios.install(); // Installation de moxios pour simuler les appels réseau
    });

    test.afterEach(async () => {
        moxios.uninstall(); // Désinstallation de moxios après les tests
        await browser.close();
    });

    test.beforeEach(() => {
        moxios.requests.reset(); // Réinitialisation des appels réseau entre chaque test
    });

    // Fonction de gestion des routes pour l'interception des appels réseau
    const routeHandler = async (route) => {
        // Inspecter la requête entrante
        const request = route.request();

        // Laisser passer les requêtes non pertinentes
        if (!request.url().includes(loginEndpoint)) {
            await route.continue();
            return;
        }

        // Ici, vous pouvez décider comment gérer la requête en fonction de l'URL, de la méthode, etc.
        // Dans cet exemple, on va simuler une réponse pour l'endpoint de connexion
        if (request.url().includes(loginEndpoint) && request.method() === 'POST') {
            await route.fulfill({
                status: 200,
                headers: { 'Access-Control-Allow-Origin': '*' },
                contentType: 'application/json',
                body: JSON.stringify({ email: email })  // Assurez-vous de renvoyer une réponse qui correspond à ce que votre application attend
            });
        } else {
            // Si ce n'est pas une requête que vous voulez manipuler, vous pouvez la laisser passer
            await route.continue();
        }
    };


    // Configuration du logger
    const logger = createLogger({
        level: 'info',
        format: format.combine(
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
        ),
        transports: [new transports.Console()]
    });

    // Instance de la page de connexion
    const loginPage = new LoginPage();

    test('Connexion réussie', async () => {
        logger.info('Démarrage du test de connexion réussie');

        // Naviguer vers la page de connexion
        await loginPage.navigateToLoginPage(page);

        // Gérer la pop-up si elle est détectée
        if (await loginPage.handlePopin(page)) {
            logger.info('Le pop-in est visible. Clique sur "Continuer sans accepter"');
            await loginPage.handlePopin(page);
        }

        logger.info('Remplissage du formulaire de connexion');
        await loginPage.fillLoginForm(page, email, password);
        await loginPage.submitLoginForm(page);
        await page.waitForSelector(loginPage.loggedInUserSelector);

        // Vérifier si l'utilisateur est connecté
        expect(await loginPage.isLoggedIn(page)).toBeTruthy();

        // Obtenir l'utilisateur connecté
        const loggedInUser = await loginPage.getLoggedInUser(page);
        expect(loggedInUser).toBe("Jules Vernie");

        logger.info('La connexion a réussi');
    });
});
