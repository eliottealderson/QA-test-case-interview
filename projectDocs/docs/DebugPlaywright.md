## Configuration du débogage Playwright dans IntelliJ IDEA

Ces instructions vous guideront à travers le processus de configuration du débogage pour les tests Playwright 
dans IntelliJ IDEA.

### Prérequis

- Avoir un projet Node.js avec Playwright installé
- Avoir IntelliJ IDEA

### Étapes

1. Ouvrez votre `package.json` et ajoutez le script de débogage suivant dans la section `scripts`:

```json
"scripts": {
    "debug": "node --inspect-brk node_modules/.bin/playwright test"
}
```

Votre `package.json` devrait ressembler à quelque chose comme ceci:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My Project Description",
  "main": "index.js",
  "scripts": {
    "test": "playwright test",
    "debug": "node --inspect-brk node_modules/.bin/playwright test"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    ...
  },
  "devDependencies": {
    "@playwright/test": "^1.14.1",
    ...
  }
}
```

2. Dans IntelliJ IDEA, allez dans le menu et sélectionnez `Run > Edit Configurations...`.

3. Cliquez sur le bouton `+` pour ajouter une nouvelle configuration et sélectionnez `Node.js`.

4. Remplissez les champs de la manière suivante :
    - `Name`: Mettez un nom pour votre configuration, par exemple `Debug Playwright`.
    - `Node parameters`: Entrez `--inspect-brk`.
    - `Working directory`: Sélectionnez le répertoire de votre projet.
    - `JavaScript file`: Mettez le chemin vers le fichier d'entrée de Playwright, qui est généralement `node_modules/.bin/playwright`.
    - `Application parameters`: Mettez `test`.
    - `Env`: Ajoutez les variables d'environnement nécessaires pour vos tests, le cas échéant.

5. Cliquez sur `OK` pour enregistrer la configuration.

### Débogage de vos tests

Maintenant que la configuration du débogueur est terminée, vous pouvez lancer le débogage de vos tests Playwright. 
Pour ce faire, sélectionnez la configuration `Debug Playwright` (ou le nom que vous avez choisi) dans le menu déroulant 
de débogage en haut à droite de l'IDE, puis cliquez sur le bouton de débogage (le bouton avec le bug).

IntelliJ IDEA lancera les tests Playwright en mode de débogage et ouvrira l'outil de débogage. 
Vous pouvez maintenant utiliser les outils de débogage pour inspecter les variables, 
exécuter du code pas à pas, ajouter des points d'arrêt, etc.

Bien sûr, voici comment vous pouvez intégrer l'option de débogage `PWDEBUG` à votre configuration :

## Ajout de l'option PWDEBUG pour le débogage de Playwright

L'option `PWDEBUG` est une variable d'environnement qui peut être utilisée pour activer 
le mode de débogage de Playwright. 
Cette variable d'environnement active des fonctionnalités supplémentaires utiles lors du 
débogage de vos tests, comme l'arrêt automatique avant chaque action Playwright, ce qui permet 
d'inspecter l'état du navigateur avant que l'action ne soit exécutée.

Voici comment vous pouvez l'ajouter à votre configuration :

1. Ouvrez votre `package.json` et ajoutez le script de débogage suivant dans la section `scripts`:

```json
"scripts": {
    "test:debug": "PWDEBUG=1 playwright test"
}
```

Votre `package.json` devrait ressembler à quelque chose comme ceci:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My Project Description",
  "main": "index.js",
  "scripts": {
    "test": "playwright test",
    "debug": "node --inspect-brk node_modules/.bin/playwright test",
    "test:debug": "PWDEBUG=1 playwright test"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    ...
  },
  "devDependencies": {
    "@playwright/test": "^1.14.1",
    ...
  }
}
```

2. Pour exécuter vos tests en mode de débogage avec `PWDEBUG`, utilisez simplement 
la commande `npm run test:debug` dans votre terminal. 
Cela lancera les tests Playwright avec l'option `PWDEBUG` activée.

Veuillez noter que lorsqu'il est utilisé avec `PWDEBUG=1`, Playwright s'arrête 
automatiquement avant chaque action et après chaque navigation, ce qui vous permet d'inspecter 
l'état du navigateur. C'est extrêmement utile lorsque vous essayez de comprendre pourquoi 
un test particulier échoue.