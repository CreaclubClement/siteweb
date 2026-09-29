# Étape Zero — accueil et bibliothèque de composants

Version de travail du 26 septembre 2026, à partir de la page Figma DesignSystème.

## État réel

- 86 composants Figma transcrits en React/TypeScript et référencés dans le catalogue.
- Variantes conservées dans les modules visuels ; wrappers d’interaction pour survol, focus, accordéons, sélections et formulaire de démonstration.
- Largeurs de contenu adaptées en Fill. La fidélité à toutes les largeurs reste à valider visuellement.
- Geist, couleurs et espacements issus du fichier Figma.
- Carte projet réutilisable alimentée par un objet Project, distinct des formats de présentation.
- Accueil intégré à `/` depuis les maquettes 2001:2567 et 2001:2606 : grille de huit projets, sélection mobile de quatre projets, menu, CTA et pied de page.
- Catalogue conservé à `/design-system`.
- Contacts via mailto provisoire. Services reliés. Journal, réseaux et mentions légales restent à raccorder. Collection projets modifiable ; aucun calendrier connecté.

**Non finalisé : 24 fichiers Figma (images, logos et pictogrammes) sont indisponibles au téléchargement dans cet environnement.** Les visuels et le logo sont volontairement différés sur l’accueil à la demande du client ; des emplacements neutres préservent la composition. La fidélité visuelle finale reste à vérifier après import. Aucune capture de composant n’est utilisée pour remplacer les assets.

## Organisation

- `components/design-system/catalog.ts` : catalogue et variantes Figma.
- `components/design-system/F*.tsx` : transcriptions visuelles de chaque composant.
- `components/design-system/Component.tsx` : comportements accessibles et carte projet alimentable en données.
- `app/page.tsx`, `components/home/Home.tsx`, `app/home.css` : accueil.
- `lib/content/projects.ts` : données initiales des huit projets, remplacées par les versions enregistrées dans le CMS.
- `app/design-system/page.tsx` : navigateur de composants.
- `app/globals.css` : tokens, largeurs fluides et styles de la bibliothèque.
- `.figma-reference/` : données sources, références visuelles et liste des assets.
- `scripts/check-assets.mjs` : vérifie la présence des assets avant publication.

## Reprise

1. Récupérer les images en PNG/JPG et les logos/pictogrammes en SVG à partir du Figma original.
2. Les rapprocher des composants à l’aide de `.figma-reference/assets-manifest.json` et `ASSETS-A-IMPORTER.md`.
3. Les enregistrer dans `public/assets/figma/` sous les noms attendus.
4. Exécuter `node scripts/check-assets.mjs`.
5. Terminer la comparaison visuelle et les vérifications d’interaction desktop/mobile, puis publier.

Le catalogue contient des interactions de démonstration. Les liens et actions métier seront raccordés lors de la construction des pages, sans envoi de message depuis cette bibliothèque.

## Contact

- `/contact` reprend la maquette mobile 2001:3563 et la composition desktop du composant 36:3015. Visuels différés conformément à la demande.
- Champs accessibles, validation native nom/e-mail, services, budget, étape et échéance.
- Le formulaire prépare un mailto et un texte à copier ; il ne transmet ni ne stocke les données. La demande de rendez-vous passe par e-mail en attendant un lien d’agenda.
- Les CTA de l’accueil pointent vers `/contact`. Header partagé entre les deux pages.

### Services
La page `/services` suit les maquettes Figma `2001:2927` et `2001:2638` : trois expertises, méthode en quatre étapes, CTA et pied de page partagés. Les liens Services du menu et du footer pointent vers ce listing et ses ancres. Les cartes restent informatives jusqu’à l’intégration des pages de détail. Visuels différés selon la décision du client ; emplacements conservés. Layout fluide sur desktop, tablette et mobile.

### CMS projets
- `/projets/amoual` : premier exemple du template Figma `2001:2296` / `2001:3293`.
- `/admin/projets` : éditeur réservé au propriétaire identifié par les en-têtes vérifiés du dispatcher. Les API contrôlent aussi cette identité et l’origine des requêtes.
- D1 `cms_projects` conserve les fiches ; R2 conserve les photos importées (10 Mo maximum). Migration Drizzle appliquée au déploiement.
- Champs : titre, type, description de carte, secteur, année, développement (liste), services (liste), couverture, photo d’ouverture, contexte, enjeux, décisions, résultats, chiffres clés, galeries par section. Chaque photo a un texte alternatif, un cadrage et une position. Les galeries peuvent être réordonnées.
- Le statut de publication contrôle la route détail ; la visibilité de la carte est indépendante pour conserver les cartes existantes pendant la rédaction des études de cas. Les projets non publiés n’ont pas de lien détail. Les aperçus de brouillons restent protégés.
- Enregistrer met immédiatement à jour la version publiée. Le contrôle de révision empêche un onglet ancien d’écraser une modification plus récente. L’identifiant URL est fixé après création.
- Les visuels Figma restent différés à la demande du client. Aucune image de substitution.
- Les données initiales viennent de la maquette ; le libellé « Réservés » du troisième résultat Amoual est harmonisé avec son paragraphe (la maquette affichait « Reversé »).
- Une migration vers Vercel devra remplacer les adaptateurs D1/R2 et l’authentification du CMS ; le modèle de contenu et le template sont indépendants de ces adaptateurs.

### Listing projets
`/projets` reprend les maquettes `2001:2992` et `2001:2849`. La page lit la même collection D1 que les études de cas et l’accueil : aucune copie de contenu. Les cartes utilisent la couverture du CMS, ou la photo d’ouverture si la couverture est vide. Les filtres sont issus des types des fiches (Rebranding et Lancement restent les choix de base). La visibilité respecte `listed`, les liens détail respectent `published`. Le menu, les CTA et le bouton mobile de l’accueil pointent vers le hub. Les visuels restent différés.
