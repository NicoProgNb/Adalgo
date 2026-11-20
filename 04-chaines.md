# 04-Chaines

## Exo 1
```text
VARIABLES
    chaine : string

INIT
    LIRE chaine

DEBUT FUNCTION inverserChaine( chaine )
    SI chaine = vide
        RETURN chaine

    SINON SI type de chaine != string
        RETURN 'Entrée non correcte'
    
    SINON
        RETURN séparation de chaine (dans un tableau), inversement des éléments, puis reconverti en chaine
    FIN SI
FIN
```

## Exo 2
```text
VARIABLES
    chaine : string
    inverse : string

INIT
    LIRE chaine
    inverse = vide

DEBUT FUNCTION estPalindrome( chaine )
    SI chaine = vide
        RETURN chaine

    SINON SI type de chaine != string
        RETURN 'Entrée non correcte'
    
    SINON
        inverse = séparation de chaine (dans un tableau), inversement des éléments, puis reconverti en chaine

        RETURN chaine = inverse
    FIN SI
FIN
```

## Exo 3
```text
VARIABLES
    chaine : string
    voyelle : string
    lettreChaine : string
    voyelleChaine : string
    qteVoyelle : number

INIT
    LIRE chaine
    voyelle = "aeiouy"
    lettreChaine = ""
    voyelleChaine = ""

DEBUT FUNCTION compterVoyelles( chaine )
    SI chaine = vide
        RETURN chaine

    SINON SI type de chaine != string
        RETURN 'Entrée non correcte'
    
    SINON
        lettreChaine = minuscule des lettre de chaine
        voyelleChaine = filtre et comparaison avec chaque élément de voyelle

        RETURN la quantité de caractère de voyelleChaine
    FIN SI
FIN
```