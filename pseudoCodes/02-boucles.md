# 02-Boucles

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
    n : number
    i : number
    result : number

INIT
    LIRE n

DEBUT FUNCTION somme( n )
    result = 0

    POUR i = 0 TANT QUE i <= n FAIRE i++
        result += i
    FIN POUR

    AFFICHER '${result}`
    RETURN result

FIN
```
## Exo 4
```text
VARIABLES
    n : number
    i : number
    result : number

INIT
    LIRE n

DEBUT FUNCTION produit( n )
    result = 0

    SI n = 0 ALORS
        result = 1
    SINON
        POUR i = 1 TANT QUE i <= n FAIRE i++
            result *= i
        FIN POUR
    FIN SI

    AFFICHER '${result}`
    RETURN result
FIN
```

## Exo 5
```text
VARIABLES
    n : number
    i : number
    result : number

INIT
    LIRE n

DEBUT FUNCTION compterPair( n )
    result = 0

    POUR i = 2 TANT QUE i <= n FAIRE i+2
        result++
    FIN POUR

    AFFICHER '${result}`
    RETURN result

FIN
```
## Exo 6
```text
VARIABLES
    n : number
    result : number[]

INIT
    result = []
    Lire n

DEBUT FUNCTION number( n )
    POUR i = 1 TANT QUE i <= n FAIRE i++
        ajouter à result[n*i]
    AFFICHER '${result}`
    RETURN result
FIN
```

## Exo 7
```text
VARIABLES
    n : number
    limite : number
    result : number[]

INIT
    result = []
    i = 1
    Lire n

DEBUT FUNCTION multiplesJusqua( n, limite )
    TANT QUE n * i <= limite
        ajouter à result[n*i]
        i++
    AFFICHER '${result}`
    RETURN result
FIN
```