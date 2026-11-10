# 01-Conditions

## Exo 1
```text
VARIABLES
n : number
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
    POUR i = 1, TANT QUE i < n, FAIRE i++
        resultat += i + ", "
    FIN POUR
    resultat += n
    AFFICHER resultat
FIN
```

## Exo 2
```text
VARIABLES


INIT

DEBUT FUNCTION (  )

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