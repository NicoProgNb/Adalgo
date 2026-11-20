import { inverserChaine, estPalindrome, compterVoyelles, capitaliser, tronquer, toCamelCase, toSnakeCase, validerMotDePasse, analyserTexte } from "./04-chaines.js"

// Tu maîtrises maintenant .toBe(), .toEqual() et le cas null.
// À partir d'ici, on ne te montre plus les tests — tu les écris.
// Les cas à couvrir sont indiqués dans chaque describe.

// Cas à couvrir : chaîne normale, chaîne vide.
describe("inverserChaine", () => {

  it("Inverse la chaine de caractère", () => {
    expect(inverserChaine("chaine")).toBe("eniahc")
  })

  it("retourne '' si pas de caractère", () => {
    expect(inverserChaine("")).toBe("")
  })

  it("retourne 'Entrée non correcte' si != string", () => {
    expect(inverserChaine(12)).toBe("Entrée non correcte")
  })

})

// Cas à couvrir : palindrome, non-palindrome, un seul caractère.
describe("estPalindrome", () => {

  it("chaine === inverse", () => {
    expect(estPalindrome("kayak")).toBe(true)
  })

    it("chaine !== inverse", () => {
    expect(estPalindrome("kaya")).toBe(false)
  })

  it("retourne '' si pas de caractère", () => {
    expect(estPalindrome("")).toBe("")
  })

  it("retourne 'Entrée non correcte' si != string", () => {
    expect(estPalindrome(12)).toBe("Entrée non correcte")
  })

})

// Cas à couvrir : chaîne avec voyelles, chaîne sans voyelle.
describe("compterVoyelles", () => {

  it("Retourne la qte de voyelle", () => {
    expect(compterVoyelles("test")).toBe(1)
  })

  it("retourne 'Entrée non correcte' si != string", () => {
    expect(compterVoyelles(12)).toBe("Entrée non correcte")
  })

})

// [FACULTATIF] Cas à couvrir : chaîne mixte (boNJOUR → Bonjour), chaîne déjà correcte.
describe("capitaliser", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : chaîne trop longue, chaîne assez courte.
describe("tronquer", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : plusieurs mots, deux mots.
describe("toCamelCase", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Même pattern inverse.
describe("toSnakeCase", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : valide, trop court, pas de chiffre, pas de majuscule.
describe("validerMotDePasse", () => {
  it.todo("à compléter")
})

// [FACULTATIF] Cas à couvrir : texte simple, texte vide.
// Rappel : le résultat est un objet { lettres, mots, phrases } — utilise .toEqual().
describe("analyserTexte", () => {
  it.todo("à compléter")
})
