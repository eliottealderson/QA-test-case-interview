# Exécution des tests avec GitHub Actions

## Introduction

GitHub Actions est un service d'intégration continue (CI) et de déploiement continu (CD) 
fourni par GitHub. 
Il permet d'automatiser les workflows directement à partir de votre dépôt GitHub, y compris 
l'exécution des tests chaque fois qu'une nouvelle pull request est créée ou qu'un nouveau 
commit est ajouté à une branche spécifique.

Dans ce guide, nous allons configurer un workflow GitHub Actions pour exécuter automatiquement 
nos tests avec Playwright.

## Configuration du workflow

La configuration du workflow est stockée dans un fichier YAML dans le répertoire `.github/workflows` de votre dépôt. Si vous n'avez pas encore ce répertoire, vous devrez le créer.

Voici un exemple de configuration pour un workflow qui exécute les tests à l'aide de 
Playwright sur Node.js version 14.x et sur l'environnement d'exécution `ubuntu-latest`.

```yaml
name: Run tests

on:
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [14.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm run test
```

Cette configuration définit un workflow nommé `Run tests` qui peut être déclenché manuellement 
à partir de l'onglet Actions de GitHub (`workflow_dispatch`).

Il comprend une seule tâche, `test`, qui est exécutée sur `ubuntu-latest`. 
Cette tâche utilise la stratégie de matrice pour tester sur différentes versions de Node.js 
(dans ce cas, uniquement la version 14.x).

La tâche comprend plusieurs étapes :
- Récupérer le code source du dépôt (`actions/checkout@v2`).
- Configurer l'environnement Node.js avec la version spécifiée (`actions/setup-node@v2`).
- Installer les dépendances (`npm ci`).
- Exécuter les tests (`npm run test`).

## Utilisation du workflow

Une fois que vous avez configuré le workflow, vous pouvez le déclencher manuellement à partir 
de l'onglet Actions de GitHub. Sélectionnez le workflow `Run tests` et cliquez sur `Run workflow`.

Vous pouvez également voir l'historique des exécutions du workflow, y compris le statut de 
chaque exécution, l'output de chaque étape, et les logs de chaque exécution.