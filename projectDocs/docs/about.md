# Visualisation de votre documentation :

MkDocs comprend un serveur de développement intégré qui vous permet de prévisualiser votre documentation pendant que vous l'écrivez. 
Pour démarrer le serveur, accédez à votre dossier de projet via le terminal et exécutez :

```bash
mkdocs serve
```

Vous pouvez maintenant voir votre documentation en ouvrant votre navigateur Web à http://localhost:8000.

# Déploiement de votre documentation :

Une fois que vous avez terminé d'écrire votre documentation, vous pouvez la déployer 
sur GitHub Pages, GitLab Pages, ou un autre service d'hébergement de votre choix.

Pour déployer sur GitHub Pages, exécutez la commande suivante :

```bash
mkdocs gh-deploy
```
Cette commande crée une nouvelle branche gh-pages dans votre dépôt Git, construit votre documentation et la pousse vers GitHub.

N'oubliez pas d'ajouter et de commettre tous les changements dans votre dépôt Git avant de déployer.

## 
Installez MkDocs si ce n'est pas déjà fait :
- Vérifiez si Python est installé : `python --version` ou `python3 --version`
- Installez Python si nécessaire : ous pouvez le télécharger et l'installer à partir du site officiel de Python. Lors de l'installation, assurez-vous de cocher l'option "Add Python to PATH" avant de cliquer sur "Install Now".
- Vérifiez si pip est installé :Une fois Python installé, vous pouvez vérifier si pip est installé en exécutant la commande pip --version ou pip3 --version. Si pip est installé, vous devriez voir la version de pip affichée.
- Installez pip si nécessaire :
  Si pip n'est pas installé, vous pouvez le télécharger et l'installer en suivant les instructions sur le site officiel de pip.
- Utilisez le bon préfixe de commande :
Notez que si Python 3 est installé sur votre système, vous devrez peut-être utiliser pip3 et python3 au lieu de pip et python respectivement.
- Essayez à nouveau d'installer MkDocs :
Une fois Python et pip installés, essayez à nouveau d'installer MkDocs en utilisant la commande 

```bash
pip install mkdocs
'ou'
pip3 install mkdocs
```