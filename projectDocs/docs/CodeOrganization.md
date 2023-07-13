# Organisation du code

Le code de notre projet est organisé de manière à faciliter la maintenance, la lisibilité, et pour assurer une 
structure claire.
Cette documentation vous aidera à comprendre l'organisation du code et à naviguer plus facilement dans le projet.

Voici la structure du répertoire :
``` markedown
--- Project Structure ---
/Heyteam
└── combined.log
└── docs
└── error.log
└── jsdoc.json
└── package.json
└── playwright.config.mjs
├── projectDocs/
│   └── docs
│   └── mkdocs.yml
├── scripts/
│   └── checkDependencies.mjs
│   └── project-info.mjs
├── src/
│   └── config.mjs
│   ├── data/
│   │   └── testData.json
│   └── mock-server.js
│   ├── pages/
│   │   └── LoginPage.mjs
│   ├── services/
│   │   └── logger.mjs
│   ├── test-plans/
│   │   └── login-plan.md
│   │   └── password-recovery-plan.md
│   │   └── registration-plan.md
│   ├── tests/
│       ├── login/
│       │   └── error-handling.spec.mjs
│       │   └── invalid-login.spec.mjs
│       │   └── successful-login.spec.mjs
│       ├── old_tests/
│       │   └── error-handling.spec.mjs
│       │   └── login-tests-mock.spec.mjs
│       │   └── login-tests.spec.mjs
│       ├── password-recovery/
│       │   └── password-recovery.spec.mjs
│       ├── registration/
│       │   └── error-handling.spec.mjs
│       │   └── registration-process.spec.mjs
│       └── testHelpers.mjs
└── test-results

```

# Description des Fichiers et Dossiers
`combined.log` : Ce fichier contient des logs combinés provenant de différentes parties de l'application.<br>
`docs` : Ce dossier contient la documentation relative à l'ensemble du projet.<br>
`error.log` : Ce fichier contient les logs d'erreurs de l'application.<br>
`jsdoc.json` : Ce fichier est le fichier de configuration pour JSDoc qui est utilisé pour générer la documentation du code.<br>
`package.json` : Ce fichier contient la liste des paquets npm nécessaires pour le projet.<br>
`playwright.config.mjs` : Ce fichier contient la configuration de Playwright pour exécuter les tests.<br>
`projectDocs` : Ce dossier contient la documentation de MkDocs pour le projet.<br>
`scripts` : Ce dossier contient des scripts utilitaires pour le projet.<br>
`src` : Ce dossier contient le code source du projet.<br>
`test-results` : Ce dossier contient les résultats des tests exécutés.<br>
`config.mjs` : Ce fichier contient les configurations de base nécessaires pour l'exécution des tests.<br>
Il inclut l'URL de base du site à tester, ainsi que d'autres paramètres de configuration spécifiques aux tests.<br>
`services` : Ce dossier contient les fichiers de service utilisés dans l'application. <br>
Par exemple, le fichier logger.mjs dans ce dossier est utilisé pour gérer les logs de l'application.<br>
`test-plans` : Ce dossier contient les plans de test pour les différentes fonctionnalités de l'application. <br>
Chaque fichier markdown représente un plan de test distinct. Par exemple, le fichier login-plan.md contient le plan de test 
pour le processus de connexion.
