const config = {
    outputDir: './artifacts',
    use: {
        // Options globales du navigateur
        browserContext: 'default', // Définit le contexte du navigateur par défaut
        video: 'retry-with-video', // Active l'enregistrement vidéo pour les tests qui échouent
        screenshot: 'only-on-failure', // Active les captures d'écran en cas d'échec
        headless: true, // Exécution en mode headless (sans interface graphique)
    },
    projects: [
        {
            name: 'Desktop Chromium',
            use: {
                browserName: 'chromium',
                headless: true,
                viewport: { width: 1920, height: 1080 },
            },
            testMatch: '**/tests/**/*.spec.mjs',
            testIgnore: '**/tests/old_tests/*.spec.mjs',
        },
    ],
    reporter: [
        'allure-playwright',
        'line',
        'dot'
    ], // Utilisation du rapporteur Allure, de ligne et de points
    workers: 6, // Utilisation de trois workers
    timeout: 30000, // Timeout de 30 secondes pour chaque test
    retries: 0, // Nombre de tentatives en cas d'échec
};

export default config;
