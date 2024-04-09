let personnage = {
    firstName : "Manon",
    lastName : "Bourrey",
    username : "Ryumaru",
    email : "bourrey.m@gmail.com"
}

let voisin = personnage
console.log(personnage)
console.log(voisin)

personnage.username = "ManonB15"
console.log(personnage)
console.log(voisin)

voisin = {...personnage}
personnage.username = "Ryu"

console.log(personnage)
console.log(voisin)