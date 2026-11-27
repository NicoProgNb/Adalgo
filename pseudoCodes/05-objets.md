# 05-Objets

## Exo 1
```text
VARIABLES
    personne: {}

INIT
    LIRE personne

DEBUT FUNCTION fullName( personne )

    RETURN prenom de personne {} + espace + nom de personne{}

FIN
```

## Exo 2
```text
VARIABLES
    personnes: []
    age: NUMBER
    ageMin : NUMBER

INIT
    LIRE personnes
    ageMin = 0

DEBUT FUNCTION filtrerParAge( personnes, ageMin )

    RETURN personnes filtré où age >= ageMin

FIN
```
## Exo 3

```text
VARIABLES
    personnes: []

INIT
    LIRE personnes

DEBUT FUNCTION trierParNom( personnes )

    RETURN personnes trié alphabétique

FIN
```
