let variableSimple1 = 12                                            // Déclaration de la variable simple 1
let variableSimple2 = variableSimple1                               // Déclaration de la variable simple 2 égale à var 1
variableSimple1 = 35                                                // Déclaration d'une nouvelle valeur à variable simple 1

console.log("VariableSimple1", variableSimple1)                     // Affichage de variable simple 1
console.log("VariableSimple2", variableSimple2)                     // Affichage de variable simple 2

let variableComplexe1 = ["Informatique", "Sport", "Television"]     // Déclaration de la variable complexe 1 étant un tableau
let variableComplexe2 = variableComplexe1                           // Déclaration de la variable complexe 2 égal à var complex 1
let variableComplexe3 = [...variableComplexe1]                      // Déclaration de la variable complexe 3 recopiant les valeurs de var complex 1 dans un tableau

variableComplexe2.push("Course")                                    // Ajout de la ligne Course dans var complex 2

console.log("variableComplexe1", variableComplexe1)                 // Affichage de var complex 1
console.log("variableComplexe2", variableComplexe2)                 // Affichage de var complex 2
console.log("variableComplexe3", variableComplexe3)                 // Affichage de var complex 3