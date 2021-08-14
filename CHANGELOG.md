## 1.2.0 (UNRELEASED)
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
