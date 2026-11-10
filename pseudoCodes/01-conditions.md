# 01-Conditions

## Exo 1
```text
VARIABLES
    n : number
    estPositif : booleen

INIT
    LIRE n

DEBUT FUNCTION estPositif( n )
    SI n >= 0 ALORS
        RETURN Vrai
    FIN SI
    RETURN Faux
FIN
```

## Exo 2
```text
VARIABLES
    n : number
    estPair : booleen

INIT
    LIRE n

DEBUT FUNCTION estPair( n )
    SI n %2 = 0 ALORS
        RETURN Vrai
    FIN SI
    RETURN Faux
FIN
```

## Exo 3
```text
VARIABLES
    a : number
    b : number
    max : number

INIT
    LIRE a
    LIRE b
    max = 0

DEBUT FUNCTION max (a, b)
    SI a > b ALORS
        RETURN a
    SI b < b ALORS
        RETURN b
    SINON
        RETURN a
    FIN SI
FIN
```

## Exo 4
```text
VARIABLES
    note : number

INIT
    LIRE note

DEBUT FUNCTION mention ( note )
    SI note < 10 && note > 0 ALORS
        RETURN "Insuffisant"
    SINON SI note <= 12 ALORS
        RETURN "Passable"
    SINON SI note <= 14 ALORS
        RETURN "Assez bien"
    SINON SI note <= 16 ALORS
        RETURN "Bien"
    SINON SI note <= 20 ALORS
        RETURN "Très bien"
    SINON 
        RETURN "Note non valable"
    FIN SI    
FIN

```
