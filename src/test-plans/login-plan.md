# Plan de test - Page de connexion

Ce document décrit les tests associés à la page de connexion de l'application.
Assurez-vous de mettre à jour ce document avec les détails spécifiques de chaque test lié à la page de connexion.
Ce document peut être complété avec d'autres tests associés à la page de connexion. Vous pouvez ajouter des sections
supplémentaires pour décrire d'autres scénarios de test, des cas d'utilisation spécifiques, des conditions de réussite,
etc.

## Liaison aux scripts de test

Les scripts de test suivants sont associés aux cas de test spécifiques dans ce plan de test :

- Suite de tests : `@error-handling-tests`
  - Cas de test [test-LP1 - vérifie le comportement de l'application en cas d'erreur et enregistre la trace de la pile pour un suivi plus détaillé.](src/tests/login/error-handling.spec.mjs:31)
- Suite de tests : `@invalid-login-tests`
  - Cas de test [test-LP2 - vérifie que le formulaire de connexion ne peut pas être soumis avec un email invalide.](src/tests/login/invalid-login.spec.mjs:31)
  - Cas de test [test-LP3 - vérifie que la page de connexion n'affiche pas le champ du mot de passe lorsqu'un email inconnu est saisi.](src/tests/login/invalid-login.spec.mjs:45)
  - Cas de test [test-LP4 - vérifie que la connexion échoue lorsque l'utilisateur saisit un email valide mais un mot de passe invalide.](src/tests/login/invalid-login.spec.mjs:60)
- Suite de tests : `@successful-login-tests`
  - Cas de test [test-LP5 - vérifie que l'utilisateur peut se connecter avec des identifiants valides et que la connexion est réussie.](src/tests/login/invalid-login.spec.mjs:31)
  - Cas de test [test-LP6 - vérifie que la session utilisateur est maintenue après une reconnexion.](src/tests/login/invalid-login.spec.mjs:45)

## Test : Gestion des erreurs et journalisation de la trace de la pile

**Objectif du test** : Tester le mécanisme de gestion des erreurs et la journalisation de la trace de la pile.

**Description** : Ce test vérifie le comportement de l'application en cas d'erreur et enregistre la trace de la pile 
pour un suivi plus détaillé. 
Le test simule une erreur en essayant de cliquer sur un élément invalide. 
L'objectif est de vérifier si une erreur est effectivement générée, de journaliser l'erreur et sa trace de pile, 
et de s'assurer que malgré l'erreur, l'utilisateur est toujours connecté.

**Étapes du test** :
1. Préparation : Configurer le navigateur avec un délai d'attente par défaut et charger la page de connexion.
2. Remplir le formulaire de connexion avec un nom d'utilisateur et un mot de passe valides.
3. Soumettre le formulaire de connexion.
4. Essayer de cliquer sur un élément invalide.
5. Gérer l'erreur en journalisant l'erreur et la trace de la pile.
6. Effectuer une assertion pour s'assurer que l'erreur est effectivement survenue.
7. Vérifier que l'utilisateur est toujours connecté.

---

## Test : Gestion des connexions invalides

**Objectif du test** : Vérifier le comportement de l'application en cas de tentatives de connexion invalides.

**Description** : Cette suite de tests vise à valider le comportement de l'application lorsque des tentatives de connexion 
invalides sont effectuées. Il comprend plusieurs cas de test pour gérer différentes situations d'erreur lors de la 
tentative de connexion.

### Cas de test 1 : Ne pas soumettre le formulaire avec un email invalide

**Description** : Ce cas de test vérifie que le formulaire de connexion ne peut pas être soumis avec un email invalide.

**Étapes du test** :
1. Préparation : Configurer le navigateur avec un délai d'attente par défaut et charger la page de connexion.
2. Remplir le champ de l'email avec un email invalide.
3. Vérifier que le bouton "Continuer" est visible.
4. Cliquer sur le bouton "Continuer".
5. Vérifier que le message d'erreur s'affiche.

### Cas de test 2 : Afficher la page d'inscription pour un email inconnu

**Description** : Ce cas de test vérifie que la page de connexion n'affiche pas le champ du mot de passe 
lorsqu'un email inconnu est saisi, et qu'elle affiche plutôt la page d'inscription.

**Étapes du test** :
1. Préparation : Configurer le navigateur avec un délai d'attente par défaut et charger la page de connexion.
2. Remplir le champ de l'email avec un email inconnu.
3. Vérifier que le bouton "Continuer" est visible.
4. Cliquer sur le bouton "Continuer".
5. Vérifier que la page d'inscription est visible.

### Cas de test 3 : Échec de la connexion avec un email valide mais un mot de passe invalide

**Description** : Ce cas de test vérifie que la connexion échoue lorsque l'utilisateur saisit un email 
valide mais un mot de passe invalide.

**Étapes du test** :
1. Préparation : Configurer le navigateur avec un délai d'attente par défaut et charger la page de connexion.
2. Remplir le formulaire de connexion avec un email valide et un mot de passe invalide.
3. Soumettre le formulaire de connexion.
4. Vérifier que l'utilisateur n'est pas connecté.

---

## Test : Connexion réussie

**Objectif du test** : Vérifier le comportement de l'application lors d'une connexion réussie et la persistence de la session utilisateur.

**Description** : Ce test suite vise à valider le comportement de l'application lorsqu'une connexion réussie est effectuée. Il comprend plusieurs cas de test pour vérifier que l'utilisateur peut se connecter avec des informations valides et que sa session est maintenue après une reconnexion.

### Cas de test 1 : Connexion réussie avec des identifiants valides

**Description** : Ce cas de test vérifie que l'utilisateur peut se connecter avec des identifiants valides et que la connexion est réussie.

**Étapes du test** :
1. Préparation : Configurer le navigateur avec un délai d'attente par défaut et charger la page de connexion.
2. Remplir le formulaire de connexion avec un nom d'utilisateur et un mot de passe valides.
3. Soumettre le formulaire de connexion.
4. Vérifier que l'utilisateur est connecté en utilisant la méthode `isLoggedIn(page)` de `loginPage`.
5. Récupérer l'utilisateur connecté à l'aide de la méthode `getLoggedInUser(page)` de `loginPage`.
6. Vérifier que l'utilisateur connecté correspond à l'utilisateur attendu.

### Cas de test 2 : Persistence de la session utilisateur après reconnexion

**Description** : Ce cas de test vérifie que la session utilisateur est maintenue après une reconnexion.

**Étapes du test** :
1. Préparation : Configurer le navigateur avec un délai d'attente par défaut et charger la page de connexion.
2. Remplir le formulaire de connexion avec des identifiants valides.
3. Soumettre le formulaire de connexion.
4. Vérifier que l'utilisateur est connecté en utilisant la méthode `isLoggedIn(page)` de `loginPage`.
5. Recharger la page.
6. Vérifier que l'utilisateur est toujours connecté en utilisant la méthode `isLoggedIn(page)` de `loginPage`.

---



