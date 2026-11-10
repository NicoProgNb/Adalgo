# 01-Conditions

## Exo 1
```text
VARIABLES
n : number
i : number
compter : number[]
element : number
resultat : string

INIT
    n = 5

DEBUT FUNCTION compterJusqua( n )
    compter = []
    POUR i = 1, TANT QUE i <= n, FAIRE i++
        compter.AJOUTER(i) 
    FIN POUR 
<!-- compter = [1, 2, 3, 4, 5] -->
    resultat = ""
    POUR CHAQUE compter(element)
        SI element == compter.length
            resultat += element  
        SINON 
            resultat += element + ", "
    FIN POUR CHAQUE
    AFFICHER resultat
FIN
```

## Exo 1 simplifié
```text
VARIABLES
    n : number
    resultat : string

INIT
    n = 5

DEBUT FUNCTION compterJusqua( n )
    resultat = ""
    POUR i = 1, TANT QUE i < n, FAIRE i++
        resultat += string(i) + ", "
    FIN POUR
    resultat += n
    AFFICHER resultat
FIN
```

## Exo 2
```text
VARIABLES
    n : number
    i : number
    resultat : string

INIT
    LIRE n

DEBUT FUNCTION afficherPairs( n )
    resultat = ""

    SI n = 0 ALORS
            resultat = "0"
    SINON
        POUR i = 2 TANT QUE i <= n FAIRE i +2
            SI résultat != "" ALORS
                resultat += ", "
            FIN SI
            resultat += i
        FIN POUR
    FIN SI

    AFFICHER resultat
FIN
```

## Exo 3
```text
VARIABLES


INIT


DEBUT FUNCTION  ()

FIN
```

## Exo 5
```text
VARIABLES

INIT

DEBUT FUNCTION ()
FIN
```
## Exo 6
```text
VARIABLES

INIT

DEBUT FUNCTION ()
FIN

## Exo 4
```text
VARIABLES

INIT

DEBUT FUNCTION ()
FIN