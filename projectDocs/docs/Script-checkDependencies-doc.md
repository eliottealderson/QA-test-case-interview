# Documentation : Script checkDependencies.mjs

Le script `checkDependencies.mjs` permet de vérifier si les dépendances nécessaires à Playwright 
(Chromium, Firefox, WebKit) sont correctement installées.

## Utilisation

1. Assurez-vous d'avoir installé Playwright en exécutant la commande suivante :

```shell
   npm install playwright
```

Exécutez le script en utilisant la commande suivante :

```shell
node --experimental-modules checkDependencies.mjs
```

## Fonctions
Le script contient deux fonctions principales :

## checkDependencies
Elle tente d'obtenir les chemins d'exécution des navigateurs (Chromium, Firefox, WebKit) à l'aide des méthodes 
executablePath fournies par Playwright.

## run
La fonction run est utilisée pour exécuter la vérification des dépendances et effectuer d'autres opérations si 
nécessaire, comme l'exécution de tests.