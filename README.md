<<<<<<< HEAD
# fulll-test
Exercice Frontend Fulll
=======
# 🔍 Github User Search

Application **React + TypeScript** permettant de rechercher des utilisateurs GitHub en temps réel, sans bouton de validation ni touche *Enter*.  
Les résultats sont affichés sous forme de **cartes utilisateurs** que l’on peut **sélectionner, dupliquer et supprimer** côté front uniquement.


## 🛠️ Technologies utilisées

- **React 19**
- **TypeScript 5**  
- **Vite 7** (build & dev server)  
- **Jest 30 + React Testing Library** (tests unitaires et d’intégration)  
- **ESLint + TypeScript ESLint** (linting)  

---


## 📂 Structure des dossiers

src/
├─ pages/ # Points d’entrée des pages (SPA -> HomePage)
├─ components/
│ ├─ ActionBar.tsx
│ ├─ SearchInput.tsx
│ └─ UserCard.tsx
├─ services/ # Appels API (fetch GitHub)
├─ state/ # Gestion locale de l’état utilisateurs via reducer
└─ tests/ # Tests unitaires et d’intégration

---

## 🚀 Fonctionnalités principales

- 🔎 **Recherche instantanée** : les résultats apparaissent directement à la saisie (API GitHub).  
- ⏱️ **Débounce 500ms** : évite de surcharger l’API à chaque frappe.  
- 🃏 **Cartes utilisateurs** : affichage des utilisateurs trouvés.  
- ✅ **Sélection** : possibilité de sélectionner une ou plusieurs cartes.  
- ➕ **Duplication** : dupliquer des cartes sélectionnées.  
- ❌ **Suppression** : supprimer des cartes sélectionnées.  
- 🏗️ **Architecture scalable** : séparation claire entre composants, services et gestion d’état.  

pages/ : même si l’app est mono-page, le dossier est prévu pour évoluer (ajouter d’autres pages plus tard).

components/ : chaque fichier contient un composant indépendant (props typées) utilisé par les pages de l'app.
Pour la scalabilité on peux creer d'autres sous-dossiers de components par features.

state/ : gère l’état des utilisateurs récupérés (hydration depuis l’API) et fournit les actions pour dupliquer / supprimer / sélectionner / séléctionner tout.

---

## ⚙️ Fonctionnement

1. L’utilisateur saisit un texte dans le **SearchInput**.  
   - Cet input met à jour le paramètre **`query`** du `UsersState` via l’événement `onChange`.

2. Dans le composant parent **Home**, un **useEffect** écoute les changements de `query`.  
   - Un délai (**500ms debounce**) est appliqué pour attendre que la valeur ne varie plus.  
   - Cela permet d’éviter des appels trop fréquents à l’API.

3. Une requête est envoyée à l’API GitHub :  
GET https://api.github.com/search/users?q={username}


4. Les résultats sont stockés dans le **state** et affichés grâce aux composants **UserCard**.  

5. Le composant **ActionBar** fournit différentes actions sur les utilisateurs sélectionnés :  
- Supprimer  
- Dupliquer  
- Contrôler la sélection 

👉 Ces actions sont gérées via un **reducer** situé dans le dossier `state/`.

---


## 🌍 API utilisée

L’application interroge l’API GitHub :  
GET https://api.github.com/search/users?q={username}

- `username` : chaîne de recherche saisie par l’utilisateur  
- Retourne : une liste d’utilisateurs GitHub correspondants  

---

## ⚙️ Installation & utilisation

Cloner le dépôt et installer les dépendances :

```bash
git clone https://github.com/username/fulll.git
cd fulll
npm install
Lancer le serveur de développement :

bash
npm run dev
Construire l’application pour la production :

bash
npm run build
Prévisualiser la version buildée :

bash
npm run preview
✅ Tests
Les tests sont situés dans src/__tests__/.
Lancer les tests avec :

bash
npm run test

```

## 🔮 Axes d’amélioration & pistes de réflexion

- **Utilisation de TailwindCSS**  
  [TailwindCSS](https://tailwindcss.com/) est un framework CSS utilitaire qui permet de construire rapidement des interfaces en appliquant des classes prédéfinies directement dans le JSX.  
  👉 Cela faciliterait la gestion du responsive design et améliorerait la maintenabilité du style.

- **Gestion des requêtes avec React Query**  
  [React Query](https://tanstack.com/query/latest) est une librairie de gestion de données côté client qui simplifie les appels API et la mise en cache.  
  👉 Elle permettrait de remplacer les `fetch` et `useEffect` manuels, d’éviter les rechargements inutiles et de centraliser la logique de gestion des requêtes.

- **Gestion d’un state global**  
  Si l’application évolue (par exemple avec un **mode édition** disponible sur plusieurs pages), il pourrait être pertinent d’utiliser un **state manager global** tel que **Redux**, **Zustand** ou **Recoil**.  
  👉 Cela rendrait la gestion des données utilisateurs plus robuste et partagée entre différents écrans.

- **Bibliothèque de composants UI**  
  Pour une meilleure **scalabilité** et accélérer le développement, l’intégration d’une bibliothèque de composants (par ex. **Chakra UI**, **Material UI**, **Radix UI** ou autre) pourrait être envisagée.  
  👉 Cela apporterait une base de composants standardisés, accessibles et cohérents pour toute l’application.

---
>>>>>>> cac4d93 (Initial commit)
