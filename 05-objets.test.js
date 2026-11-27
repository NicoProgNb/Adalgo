import { fullName, filtrerParAge, trierParNom, grouperParVille, statistiques, prixTotal, plusCher } from "./05-objets.js"

// Les fonctions retournent des objets et des tableaux d'objets.
// Utilise .toBe() pour une string, .toEqual() pour un objet ou un tableau.
// Plus d'indications sur les cas — choisis toi-même ce qui est pertinent à tester.

describe("fullName", () => {

  it("retourne le prénom et le nom séparés par un espace", () => {
    expect(fullName({ prenom: "Ada", nom: "Lovelace" })).toBe("Ada Lovelace")
  })

  it("retourne undefined si un élément est manquant", () => {
    expect(fullName({ nom: "Lovelace" })).toBe("undefined Lovelace")
  })

})

// ==============================

describe("filtrerParAge", () => {

  it("retourne les personnes qui on un age >= ageMin ", () => {
    expect(filtrerParAge([{ nom: "Ada", age: 28 }, { nom: "Alan", age: 17 }], 18)).toEqual([{ nom: "Ada", age: 28 }])
  })

  it("retourne un tableau vide si personne n'a un age >= ageMin'", () => {
    expect(filtrerParAge([{ nom: "Ada", age: 28 }, { nom: "Alan", age: 17 }], 80)).toEqual([])
  })

  it("retourne un tableau vide si le tableau de départ est vide", () => {
    expect(filtrerParAge([], 18)).toEqual([])
  })

})

// ==============================

describe("trierParNom", () => {

  it("trie les personnes par ordre alphabétique", () => {
    expect(trierParNom([{ nom: "Turing" }, { nom: "Lovelace" }, { nom: "Hopper" }]))
    .toEqual([{ nom: "Hopper" }, { nom: "Lovelace" }, { nom: "Turing" }])
  })

  it("retourne un tableau vide si le tableau de départ est vide", () => {
    expect(trierParNom([])).toEqual([])
  })

})

// ==============================

// [FACULTATIF]
describe("grouperParVille", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("statistiques", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("prixTotal", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("plusCher", () => {
  it.todo("à compléter")
})
