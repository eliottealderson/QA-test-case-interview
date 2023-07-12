# Documentation du script Project Info

Cette documentation fournit des informations sur le script "project-info.mjs".

## Contexte
Le script "project-info.mjs" est un outil utile pour obtenir des informations sur votre environnement de développement, 
les dépendances de votre projet et la structure de votre projet. 
Il peut être exécuté dans divers contextes pour faciliter la configuration, la gestion des dépendances 
et le débogage de votre projet. </br>

Voici quelques cas d'utilisation courants :

1. **Vérification de l'environnement** :
Lorsque vous commencez à travailler sur un nouveau système ou à collaborer avec d'autres développeurs, 
il est important de s'assurer que l'environnement est correctement configuré. 
En exécutant le script "project-info.mjs", vous obtiendrez rapidement des informations sur :

Le système d'exploitation : Vous saurez sur quel système d'exploitation vous travaillez, que ce soit Windows, 
macOS ou Linux.</br>
La version de Node.js : Vous connaîtrez la version de Node.js installée sur votre système.</br>
Les versions des navigateurs Playwright : Vous saurez quelles versions de Chromium, Firefox et WebKit sont utilisées 
par Playwright.

Ces informations vous aideront à vérifier si votre environnement répond aux exigences de votre projet 
et à prendre les mesures nécessaires le cas échéant.

2.  **Gestion des dépendances**:
Le script "project-info.mjs" peut également être utilisé pour examiner les dépendances de votre projet. 
En affichant la structure du projet, vous pouvez facilement repérer les répertoires tels que "node_modules" 
qui contiennent les dépendances externes. Cela vous permet de :

Vérifier la présence des dépendances : Vous pouvez vous assurer que toutes les dépendances nécessaires sont présentes 
dans votre projet.</br>
Vérifier la configuration des dépendances : Vous pouvez vérifier si les dépendances sont correctement installées 
et configurées.</br>
Cela facilite la gestion des dépendances et vous permet de vous assurer que votre projet dispose des ressources 
nécessaires pour fonctionner correctement.

3. **Analyse de la structure du projet**:
La structure du projet est essentielle pour une organisation claire et une navigation facile entre les fichiers.
Le script "project-info.mjs" génère une représentation arborescente de la structure de votre projet, 
ce qui vous permet de :

Visualiser l'organisation des fichiers et des répertoires : Vous pouvez rapidement identifier la hiérarchie des 
dossiers et des fichiers dans votre projet.</br>
Repérer des fichiers spécifiques : Vous pouvez utiliser la structure pour localiser rapidement des fichiers 
spécifiques dans votre projet.</br>
Comprendre la hiérarchie du projet : Vous pouvez mieux comprendre comment les différents éléments de votre projet 
sont organisés et interagissent les uns avec les autres.</br>
Cela facilite la navigation et la gestion de votre projet, en vous permettant de localiser rapidement les fichiers 
et d'avoir une vue d'ensemble de la structure.

4. **Débogage et investigation** :
Lorsque vous rencontrez des problèmes ou des erreurs dans votre projet, le script "project-info.mjs" 
peut vous fournir des informations supplémentaires pour le débogage et l'investigation. 
Les détails sur l'environnement et la configuration du projet peuvent aider à :

Diagnostiquer les problèmes : Les informations sur l'environnement et les versions des navigateurs peuvent vous aider 
à identifier les causes possibles des problèmes que vous rencontrez.</br>
Résoudre les problèmes plus rapidement : En comprenant mieux l'environnement et la configuration, 
vous pouvez prendre des mesures plus ciblées pour résoudre les problèmes, ce qui permet d'accélérer le processus de 
résolution des problèmes.

En résumé, le script "project-info.mjs" est un outil polyvalent qui fournit des informations essentielles 
sur l'environnement, les dépendances et la structure de votre projet. 
Il peut être utilisé pour la vérification de l'environnement, la gestion des dépendances, 
l'analyse de la structure du projet et le débogage. </br>
En l'exécutant dans le contexte de votre projet, vous pouvez obtenir une meilleure compréhension de votre environnement 
de développement et faciliter la gestion et la résolution des problèmes liés à votre projet.

## Prérequis

- Node.js doit être installé sur votre système.
- Les dépendances requises doivent être installées. Vous pouvez les installer en exécutant la commande suivante 
depuis la racine du projet :

``` bash
  npm install
```

## Utilisation
Exécutez la commande suivante pour afficher les informations sur le projet :
```node --experimental-modules scripts/project-info.mjs```
Assurez-vous d'exécuter cette commande depuis la racine du projet.

## Sortie
Le script affichera les informations suivantes :

`Système d'exploitation` : le système d'exploitation sur lequel vous exécutez le script.</br>
`Version de Node.js` : la version de Node.js installée sur votre système.</br>
`Versions des navigateurs Playwright` : les versions de Chromium, Firefox et WebKit utilisées par Playwright.</br>
`Structure du projet` : une représentation en arborescence de la structure de votre projet, y compris les fichiers et 
les répertoires.</br>
`Exclusion des répertoires`
Le script exclut certains répertoires par défaut de la structure du projet, 
tels que "node_modules", ".idea", "external", "libraries" et "scratches and consoles". 
Si vous souhaitez exclure d'autres répertoires, vous pouvez les ajouter à la liste excludedDirs 
dans le fichier "project-info.mjs".