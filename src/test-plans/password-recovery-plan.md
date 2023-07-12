# Plan de test - Récupération du mot de passe

Ce document décrit les tests associés à la récupération du mot de passe de l'application.
Ce document peut être complété avec d'autres tests associés à la récupération du mot de passe. 
Vous pouvez ajouter des sections supplémentaires pour décrire d'autres scénarios de test, des cas d'utilisation 
spécifiques, des conditions de réussite, etc.

Assurez-vous de mettre à jour ce document avec les détails spécifiques de chaque test lié à la récupération du mot de passe.

## Liaison aux scripts de test

Les scripts de test suivants sont associés aux cas de test spécifiques dans ce plan de test :

Suite de tests : `@password-recovery-tests`
    - Cas de test 1 [test-LP7 - vérifie que l'utilisateur est correctement redirigé vers la page de récupération du mot de passe lorsqu'il clique sur le lien "Mot de passe oublié" sur la page de connexion. ](src/tests/login/invalid-login.spec.mjs:60)

## Test : Navigation vers la page de récupération du mot de passe

**Objectif du test** : Vérifier que l'utilisateur est redirigé vers la page de récupération du mot de passe 
lorsqu'il clique sur "Mot de passe oublié".

**Description** : Ce test vérifie que l'utilisateur est correctement redirigé vers la page de récupération du 
mot de passe lorsqu'il clique sur le lien "Mot de passe oublié" sur la page de connexion.

**Étapes du test** :
1. Préparation : Configurer le navigateur avec un délai d'attente par défaut et charger la page de connexion.
2. Remplir le champ de l'email avec une adresse e-mail valide.
3. Vérifier que le bouton "Continuer" est visible.
4. Cliquer sur le bouton "Continuer".
5. Cliquer sur le lien "Mot de passe oublié".
6. Attendre la navigation vers la page de récupération du mot de passe.
7. Vérifier que la page de récupération du mot de passe est visible.

---


