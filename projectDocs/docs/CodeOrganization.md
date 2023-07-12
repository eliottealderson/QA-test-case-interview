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


Les fichiers .js dans le répertoire `pages/` encapsulent les fonctionnalités spécifiques à chaque page de l'application, 
permettant une organisation et une modularité du code.

Le répertoire `tests/` contient les tests automatisés pour le processus de connexion. 
Ces fichiers utilisent les données stockées dans `data/testData.json` pour exécuter différents scénarios de test.

La configuration de l'application et des tests est gérée dans les fichiers `config.mjs` 
respectivement. Cela permet de centraliser et de contrôler les paramètres de l'application et des tests.

Le serveur mock est géré dans `mock-server.js`, qui permet d'isoler les appels réseau et d'améliorer la stabilité 
et la reproductibilité des tests.

Le fichier `package.json` gère les dépendances du projet, tandis que `jsdocs.json` et `mkdocs.yml` sont utilisés 
pour la génération de la documentation.
