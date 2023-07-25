# QA-test-case-interview

[![Actions Status](https://github.com/eliottealderson/QA-test-case-interview/workflows/Manual%20trigger%20workflow/badge.svg)](https://github.com/eliottealderson/QA-test-case-interview/actions)

Consultez notre :
- [Documentation ici](https://eliottealderson.github.io/QA-test-case-interview/docsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocs)
- [Rapports de test ici](https://eliottealderson.github.io/QA-test-case-interview/docsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocs26/)

## Organisation des branches

- `main`: Cette branche est pour le développement de l'application et le lancement des tests.
- `gh-pages`: Cette branche est utilisée pour publier les rapports Allure générés par les tests.
- `docs`: Cette branche est utilisée pour publier la documentation du projet générée par MkDocs.

## Notes

L'étape "Post the link to the report" est utilisée pour ajouter un lien vers le rapport de test dans le statut du commit courant sur GitHub.

Pour voir ce lien, allez sur GitHub et trouvez le commit spécifique pour lequel le workflow a été exécuté. Sur la page de détails du commit, vous verrez une section "Checks" qui liste tous les workflows GitHub Actions exécutés pour ce commit.

Pour chaque workflow, il y a un statut (qui peut être "success", "failure", ou "in progress") et un lien vers les détails du workflow. Si l'étape "Post the link to the report" a été exécutée avec succès, vous verrez un lien vers le rapport de test dans le statut du workflow. Ce lien est généralement affiché sous la forme d'un petit globe à côté du statut du workflow.

## Prise en main rapide

### En local

Installation des dépendances  ↴
```bash
npm install
```

Exécution des tests  ↴
```bash
npm run test
```

Affichage du rapport de test  ↴
```bash
allure serve allure-results
```
↪ Pour quitter le rapport de test depuis le terminal, appuyez sur `<Ctrl+C>`.

Affichage de la documentation complète  ↴
```bash
mkdocs serve
```
Cliquez sur l'url affichée dans le terminal (ressemble à : Serving on http://127.0.0.1:8000/).

↪ Pour quitter, appuyez sur `<Ctrl+C>`.

### Exécuter les scripts checkDependencies.mjs et project-info.mjs

Se placer dans le répertoire scripts avec `cd Heyteam/scripts` si vous rencontrez un message d'erreur.

Exécution du script  ↴
```bash
node --experimental-modules scripts/project-info.mjs
```
↪ Pour quitter, appuyez sur `<Ctrl+C>`.

## Exécution des tests via GitHub Actions

Notre pipeline de CI/CD, configuré via GitHub Actions, vous permet d'exécuter automatiquement les tests à chaque fois que vous effectuez un push vers la branche `main`. <br> 
Vous pouvez aussi déclencher manuellement l'exécution des tests.

Voici comment déclencher manuellement un test :

1. Allez sur le [lien vers les workflows GitHub Actions](https://github.com/eliottealderson/QA-test-case-interview/actions) de ce répertoire.
2. Cliquez sur le workflow nommé `Manual trigger workflow` dans la liste sur la gauche.
3. Cliquez sur le bouton "Run workflow" sur la droite, sélectionnez la branche sur laquelle vous souhaitez exécuter les tests, puis cliquez à nouveau sur "Run workflow".

Le pipeline CI/CD commencera à exécuter les tests. Une fois les tests terminés, vous pourrez voir les résultats directement sur la page de GitHub Actions. De plus, un rapport Allure sera généré et publié sur la branche `gh-pages`, et la documentation du projet sera mise à jour sur la branche `docs`.

Notez que si les tests échouent, le pipeline continuera d'exécuter les jobs suivants afin de générer les rapports et mettre à jour la documentation.

## Statut des workflows via les badges

Les badges au début de ce README vous fournissent des informations rapides sur le statut des workflows de notre projet.

- Le badge ![Actions Status](https://github.com/eliottealderson/QA-test-case-interview/workflows/Manual%20trigger%20workflow/badge.svg) indique le statut du dernier workflow exécuté. Vous pouvez cliquer dessus pour accéder directement à la page des workflows GitHub Actions de ce répertoire.

- Les liens suivants vous mènent respectivement à notre [documentation](https://eliottealderson.github.io/docs/docs/) et
à nos [rapports de test](https://eliottealderson.github.io/QA-test-case-interview/docsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocsdocs26/). 
<br> Ils vous permettent de consulter facilement les résultats détaillés de nos tests et la documentation à jour de notre projet.

Ces badges et liens vous permettent de suivre facilement l'état actuel de notre projet et de ses tests à chaque fois 
que vous consultez ce README.
