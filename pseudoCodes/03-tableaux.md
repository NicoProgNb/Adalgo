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
    tableau : number[]


INIT


DEBUT FUNCTION contient( tableau, valeur )

FIN
```
## Exo 5
```text
VARIABLES
    tableau : number[]


INIT


DEBUT FUNCTION compter( tableau, valeur )

FIN
```