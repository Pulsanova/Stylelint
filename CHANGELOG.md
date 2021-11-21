## 2.0.0 (UNRELEASED)
- [BREAKING] Nouvelle règle : Interdit l'utilisation de fonctions globales sans import de module (e.g. `@use 'sass:color';`).  
  Ceci est un breaking change car cela implique l'arrêt de la prise en charge de Node-SASS qui ne prend pas en charge les modules.
- Met à jour les dépendances (et notamment Stylelint en version 14.x).
- Règles modifiées :  
  - Il est maintenant possible de dupliquer une propriété si la valeur contient un préfixe 
    navigateur différent à chaque fois (e.g. `width: fit-content; width: -moz-fit-content;`).
  - Les keyframess ne doivent pas contenir un mix de CamelCase et de lower kebab-case (e.g. `@keyframes mon-block-MalNommé {}`).
  - Les `@use` sont maintenant autorisés à être placés avant les `@import`.
- Nouvelles règles :
  - Le linting s'assure maintenant que `var()` est bien utilisé quand on tente d'utiliser une custom-property.
  - Interdit l'utilisation de la composante "alpha" des codes hexadecimaux au profit de `rgba()`.
  - Le linting s'assure que la fonction `quote` n'est pas utilisée avec une chaîne déjà quotée.
  - Interdit l'utilisation de fonctions globales sans import de module.
  - Interdit les espaces irréguliers (e.g. `\u00A0`, etc.).
  - Interdit les commentaires vides aussi en SCSS.
  - Il doit dorénavant toujours y avoir une ligne vide avant les variables, sauf:
    - Si la variable suit une autre variable.
    - Si la variable suit un commentaire.
    - Si la variable est le première élément dans un block.
    - Si la variable se situe dans un block d'une seule ligne.

## 1.2.(1-2) (2021-08-14)
- Corrige la liste des fonctions pour lesquelles les params. nommés sont autorisés.

## 1.2.0 (2021-08-14)
- Met à jour les dépendances.
- Inverse la règle `number-leading-zero`: Il faut dorénavant toujours mettre le 0 devant les nombres.  
  En effet, ne pas le mettre dans certain cas provoque un comportement inattendu (avec les fonctions CSS en particulier).
- Permet d'indiquer les `(min-)?height`, `(min-)?width` en `rem`.

## 1.1.0 (2020-12-26)
- Met à jour les dépendances.

## 1.0.2 (2020-09-04)
- Met à jour les dépendances.
- Remplace les règles dépréciées par les nouvelles règles équivalentes.

## 1.0.1 (2020-08-13)
- Corrige les exceptions de la règle `scss/at-function-named-arguments`.

## 1.0.0 (2020-08-11)
- Première version "stable".
- Met à jour les dépendances de développement.
- Ajoute des fonctions du core de SASS dans les exceptions de la règle 
  `scss/at-function-named-arguments` vu que les arguments nommés dans ce
  cas servent d'indicateurs.

## 0.2.0 (2020-07-17)
- Autorise les préfixes `_` dans les variables.  
  (Ceci pour permettre de "déclarer" la visibilité du membre)
- Permet l'absence de namespace dans les noms de variables vu l'arrivée de `@use`. 

## 0.1.2 (2020-07-16)
- Met à jour les dépendances de développement.
- Corrige le suppport des `@use` et `@forward` en SCSS.

## 0.1.1 (2020-06-22)
- Ajoute des exceptions manquantes (`@include media-(min|max)`) pour la règle `order/order`.

## 0.1.0 (2020-06-20)
- Première version.
