# 03-Tableaux

## Exo 1
```text
VARIABLES
    tableau : number[]
    max : number
INIT
    max = -999
    LIRE tableau

DEBUT FUNCTION maximum( tableau )
    POUR CHAQUE tableau.element
        SI element > max
            max = element
        FIN SI
    FIN POUR CHAQUE

    AFFICHER max
    RETURN max
FIN
```
## Exo 2
```text
VARIABLES
    tableau : number[]
    min : number

INIT
    min = 999
    LIRE tableau

DEBUT FUNCTION minimum( tableau )
    POUR CHAQUE tableau.element
        SI element < min
            min = element
        FIN SI
    FIN POUR CHAQUE

    AFFICHER min
    RETURN min
FIN
```
## Exo 3
```text
VARIABLES
    tableau : number[]
    i : number
    somme : number
    resultat : number

INIT
    LIRE tableau
    somme = 0
    i = 0

DEBUT FUNCTION moyenne( tableau )
    SI tableau = [] ALORS
        RETURN null
    SINON
        POUR CHAQUE tableau.element
            somme += element
            i++
        FIN POUR CHAQUE
            resultat = somme / i
    FIN SI

    AFFICHER resultat
    RETURN resultat
FIN
```
## Exo 4
```text
VARIABLES
    contient : number[]
    valeur : number

INIT
    LIRE contient
    LIRE valeur

DEBUT FUNCTION contient( tableau, valeur )
    POUR i = 0 TANT QUE i < tableau.length FAIRE i++ 
        SI tableau[i] = valeur ALORS 
            AFFICHER vrai
            RETURN vrai
        FIN SI
    FIN POUR
    AFFICHER faux
    RETURN faux
FIN
```
## Exo 5
```text
VARIABLES
    tableau : number[]
    valeur : number
    compteur : number


INIT
    LIRE contient
    LIRE valeur
    compteur = 0

DEBUT FUNCTION compter( tableau, valeur )
    POUR CHAQUE tableau.element
        SI valeur = tableau.element ALORS
            compteur ++
        FIN SI
    FIN POUR
    AFFICHER compteur
    RETURN compteur
FIN
```