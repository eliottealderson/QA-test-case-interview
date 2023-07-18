
# Projet de Test d'Automatisation Heyteam - QA engineer

Ce projet a pour but la réalisation du test technique Heyteam pour le poste de QA engineer.
Le code est organisé de manière claire et modulaire pour faciliter la maintenance et la lisibilité.

# Bienvenue dans le Guide de Test d'Automatisation

Ce guide fournit un ensemble de directives pour la mise en œuvre des tests d'automatisation du processus de connexion 
pour l'application open classroom.</br>
Le code présenté ici suit l'architecture Page Object, une approche largement 
reconnue pour développer des tests d'automatisation maintenables et évolutifs.</br>
Les fonctionnalités et les éléments du DOM spécifiques à chaque page sont encapsulés dans des classes dédiées, 
à savoir `LoginPage`.

## Structure de données pour les tests

Pour couvrir une variété de scénarios de test, nous utilisons des données de test stockées dans 
un fichier JSON (`testData.json`). Cela offre une flexibilité pour tester différentes combinaisons d'entrées 
utilisateur et scénarios.

## Configuration et Gestion des Dépendances

Notre fichier `config.mjs` contient la configuration de base requise pour nos tests, y compris l'URL de base du site 
à tester. Les dépendances de ce projet sont gérées à l'aide de gestionnaires de paquets couramment utilisés tels que 
npm ou yarn.

## Vérification, Dépannage et audit

### Vérification des dépendances `checkDependencies.mjs`
Le script de vérification des dépendances permet d'assurer que tous les navigateurs nécessaires sont correctement 
installés et accessibles avant l'exécution des tests. Le script utilise les modules 
Chromium, Firefox et Webkit de Playwright pour obtenir les chemins d'exécution de chaque navigateur. 
S'il y a un problème avec l'installation de l'un des navigateurs, le script lèvera une exception que nous interceptons 
et gérons en affichant un message d'erreur à l'utilisateur. 
Si aucune exception n'est levée, cela signifie que toutes les dépendances sont correctement installées et nous pouvons 
continuer à exécuter nos tests.

### Affichage des informations du projet `project-info.mjs`
Le second script fournit des informations précieuses sur l'environnement du projet et peut être utilisé pour le 
dépannage ou l'audit. Il récupère et affiche des informations sur le système d'exploitation, la version de Node.js et 
les versions des navigateurs utilisés par Playwright. Le script fait ensuite une lecture synchrone du système de 
fichiers pour afficher la structure du projet, excluant certains dossiers non pertinents comme node_modules, .git, etc. 
Cela donne une vue globale de la structure du projet, utile pour comprendre l'organisation des fichiers et des dossiers 
dans le projet. Le script utilise également les fonctionnalités de gestion des chemins et du système de fichiers de 
Node.js pour résoudre les chemins de fichiers et lire le contenu des dossiers.

## Génération de Rapports

Pour améliorer la visibilité des résultats des tests, nous utilisons `allure`, un générateur de rapports largement 
reconnu dans l'industrie pour sa clarté et son efficacité. 
Allure offre des rapports illustratifs et détaillés, ce qui rend les résultats des tests facilement compréhensibles 
même pour les non-techniciens. Les rapports générés par Allure incluent une vue d'ensemble de l'exécution du test, 
permettant aux parties prenantes de comprendre rapidement le niveau de qualité du code. 
De plus, Allure offre la possibilité de voir des détails spécifiques pour chaque cas de test, incluant des captures 
d'écran, des messages de log, des enregistrements vidéo et d'autres artefacts qui peuvent être utiles pour le débogage. 
Par conséquent, l'utilisation d'Allure améliore grandement la visibilité des résultats des tests, aide à identifier les 
problèmes et accélère le processus de prise de décision basée sur les résultats des tests.

## Test management

Ce projet utilise une pile de tests modernes avec Playwright, Test Runner et Allure Reporter. 
Nous avons mis en place une méthodologie de gestion de nos tests pour assurer une organisation claire et une traçabilité précise des tests. 
Pour plus d'informations sur notre approche de gestion des tests, veuillez consulter notre guide : [Gestion des tests](test-management.md).


## À Noter

Bien que ces travaux fournissent un modèle semblant complet pour la mise en place des tests d'automatisation, 
il peut toujours être optimisé et nécessiter des ajustements en fonction des attentes spécifiques.
Avant d'exécuter les tests, veillez à installer toutes les dépendances nécessaires.

J'espère que ce guide vous aidera à apprécier la démarche quant à une approche différente du test 
de la mise en place de tests d'automatisation efficaces. Bonne codification !
