# Exécution des Tests

Dans ce projet, nous utilisons Playwright pour exécuter nos tests. 
Voici une brève explication de comment vous pouvez exécuter les différents scripts de test 
inclus dans le `package.json`.

- [Pré-requis](projectDocs/docs/DependenciesManagement.md)

## Exécution des Tests Standards

Pour exécuter les tests en mode standard, utilisez la commande suivante:

```bash
npm run test
```

Cette commande lance les tests à l'aide de Playwright.

## Exécution des Tests en mode sans tête

Si vous voulez exécuter les tests en mode sans tête, c'est-à-dire sans ouvrir une fenêtre de 
navigateur, vous pouvez utiliser la commande suivante:

```bash
npm run test:headless
```

## Exécution des Tests en mode Debug

Si vous voulez déboguer vos tests, vous pouvez utiliser la commande suivante qui lance les 
tests avec l'option `PWDEBUG` :

```bash
npm run test:debug
```

Cela va lancer Playwright en mode débogage, ce qui signifie que les tests s'arrêteront à 
chaque action pour vous permettre de voir ce qui se passe à chaque étape.

## Exécution des Tests en mode Debug avec Node

Si vous voulez déboguer vos tests en utilisant l'inspecteur de Node, utilisez la commande 
suivante:

```bash
npm run debug
```

Cela lance Node avec l'option `inspect-brk` qui arrête l'exécution du script avant le 
premier `require()` et permet à un débogueur de se connecter avant que le code commence à 
s'exécuter.

## Génération de la Documentation

Pour générer la documentation de code avec JSDoc, utilisez la commande suivante:

```bash
npm run docs
```

Cela va générer la documentation à partir de vos commentaires de code en utilisant le fichier de configuration `jsdoc.json`.

---
