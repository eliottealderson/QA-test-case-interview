# Utilisation de Jest avec Playwright

`Playwright` est une excellente bibliothèque pour les tests de navigateur automatisés, 
tandis que `Jest` est un framework de test populaire pour JavaScript. 
Utilisés ensemble, ils offrent une solution puissante pour tester votre application Web.

## Configuration

Pour utiliser `Jest` avec `Playwright`, vous aurez besoin de quelques dépendances supplémentaires. 
Assurez-vous d'avoir installé les packages suivants :

```json
{
  "devDependencies": {
    "jest": "^27.5.1",
    "jest-playwright-preset": "^1.7.0",
    "playwright": "^1.35.1"
  }
}
```

## Utilisation de Jest avec Playwright
Pour utiliser Jest avec Playwright, vous devez configurer Jest pour utiliser le "preset" jest-playwright. 
Vous pouvez le faire en ajoutant la ligne suivante à votre fichier de configuration Jest :

```json
{
"preset": "jest-playwright-preset"
}
```

## Écriture de tests
Avec `Jest` et `Playwright`, vous pouvez écrire des tests qui interagissent avec votre application Web de la même manière
qu'un utilisateur le ferait. Voici un exemple de test qui se connecte à une application Web et vérifie que l'utilisateur
est bien connecté :

## Exécution des tests
Pour exécuter vos tests, utilisez la commande `npm run test:jest` 
Cela exécutera tous les tests dans votre projet qui correspondent au modèle spécifié dans votre fichier 
de configuration Jest.


## Ressources supplémentaires

Pour plus d'informations sur l'utilisation de `Jest` et `Playwright`, consultez les documents suivants :

- [Jest Documentation](https://jestjs.io/)
- [Playwright Documentation](https://playwright.dev/)
- [Jest Playwright GitHub](https://github.com/playwright-community/jest-playwright)
