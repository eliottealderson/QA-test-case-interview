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