import { chromium, firefox, webkit } from 'playwright';

async function checkDependencies() {
    try {
        await Promise.all([
            chromium.executablePath(),
            firefox.executablePath(),
            webkit.executablePath(),
        ]);
        console.log('Toutes les dépendances sont correctement installées.');
    } catch (error) {
        console.error('Certaines dépendances ne sont pas installées correctement :', error);
    }
}

async function run() {
    try {
        await checkDependencies();
        console.log('Dépendances vérifiées. Exécution des tests...');
        // Exécuter les tests ici
    } catch (error) {
        console.error('Erreur lors de la vérification des dépendances :', error);
    }
}

(async () => {
    await run();
})();
