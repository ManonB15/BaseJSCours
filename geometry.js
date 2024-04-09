let rectangle = {
    x : 50,
    y : 120,
    largeur : 30,
    longueur : 70,
}

rectangle.perimetre = (rectangle.largeur + rectangle.longueur) * 2
console.log("Le périmètre du rectangle est :", rectangle.perimetre)

rectangle.unite = "cm"
console.log(rectangle.unite)

rectangle.area = rectangle.longueur * rectangle.largeur
console.log ("L'aire du rectangle est :", rectangle.area)

rectangle.diagonale = (rectangle.longueur * rectangle.longueur) + (rectangle.largeur * rectangle.largeur)
console.log("La diagonale au carré vaut", rectangle.diagonale, rectangle.unite + "²")

rectangle.diagonale = (Math.sqrt(rectangle.diagonale)).toFixed(2)

console.log("La diagonale vaut",rectangle.diagonale, rectangle.unite)
 
console.log("\nX :", rectangle.x + rectangle.unite)
console.log("Y :", rectangle.y + rectangle.unite)
console.log("Périmètre :", rectangle.perimetre + rectangle.unite)
console.log("Aire :", rectangle.area + rectangle.unite, "²")
console.log("Diagonale :", rectangle.diagonale + rectangle.unite+"\n")