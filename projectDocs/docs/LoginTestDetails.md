# Analyse du code

Le script se veut bien structuré et devrait suivre les bonnes pratiques de codage pour les tests d'automatisation 
utilisant Playwright. 
En supposant que tous les sélecteurs CSS (.dashboard et .error-message) sont corrects 
et que la page chargée par Config.BASE_URL est la bonne, ce script devrait fonctionner comme prévu.

Voici quelques points à noter :

- Toutes les dépendances nécessaires sont importées.
- Les tests sont bien organisés en utilisant describe pour regrouper les tests liés.
- Les fonctions beforeAll et afterAll sont utilisées pour initialiser et nettoyer le navigateur, ce qui est une bonne pratique.
- Les informations d'identification valides et invalides sont prises à partir de Config, ce qui indique que les valeurs ne sont pas codées en dur dans les tests.
- L'utilisation d'une Page Object (LoginPage) est une bonne pratique pour l'abstraction des détails d'interaction avec la page.