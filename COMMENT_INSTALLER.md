# Installer "Solveur de chats" comme une vraie app Android

Pour apparaître dans le menu "Envoyer vers..." d'Android, l'app doit être
servie en HTTPS puis installée depuis le navigateur (c'est ce qui la
transforme en app à part entière, avec sa propre icône et son intégration
au partage système). Ça ne marche pas avec un simple fichier ouvert en
local — il faut un hébergement, mais gratuit et rapide via GitHub Pages.

## 1. Héberger les fichiers (5 minutes, gratuit)

1. Va sur https://github.com et crée un compte si besoin.
2. Crée un nouveau dépôt (bouton vert "New"), par exemple nommé `cat-solver`.
   Coche "Public".
3. Sur la page du dépôt, clique "Add file" → "Upload files", puis dépose
   les 5 fichiers de ce dossier :
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
4. Clique "Commit changes".
5. Va dans **Settings** (du dépôt) → **Pages** (menu de gauche).
6. Sous "Source", choisis la branche `main` et le dossier `/ (root)`, puis
   "Save".
7. Attends une minute, une URL apparaît en haut de la page, du style :
   `https://TON-PSEUDO.github.io/cat-solver/`

## 2. Installer l'app sur ton téléphone

1. Ouvre cette URL dans **Chrome** sur ton Android.
2. Appuie sur le menu ⋮ (trois points en haut à droite).
3. Choisis **"Installer l'application"** (ou "Ajouter à l'écran d'accueil").
4. Confirme. Une icône "Solveur de chats" apparaît sur ton écran d'accueil,
   comme une app normale.

## 3. Utiliser le partage direct

1. Prends une capture d'écran du puzzle.
2. Ouvre-la dans Photos (ou reste dans l'aperçu juste après la capture).
3. Appuie sur "Partager" / "Envoyer vers...".
4. **Solveur de chats** apparaît dans la liste, au même endroit que
   WhatsApp, Gmail, etc. Sélectionne-la.
5. L'app s'ouvre directement avec la photo chargée et calcule la solution
   automatiquement.

## Notes

- Ça fonctionne uniquement sur Android/Chrome : l'API "Web Share Target"
  qui permet ce comportement n'est pas supportée par Safari/iOS à ce jour.
- Tout le traitement reste local sur le téléphone (aucune photo n'est
  envoyée à un serveur) — GitHub Pages ne sert qu'à héberger le code de
  l'app, pas à traiter tes images.
- Si tu modifies `index.html` plus tard, il suffit de re-uploader le
  fichier sur GitHub (même méthode qu'à l'étape 1.3) ; l'app se met à jour
  toute seule au prochain lancement.
