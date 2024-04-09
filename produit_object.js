let produit = {
    name: "manette",
    price: 45,
    stock: 230,
    number_sell: 50,
}

console.log(produit)

produit.gain = produit.price*produit.number_sell

console.log(produit)

produit.valeur_stock = produit.price*produit.stock

console.log("Produit :", produit.name, "/ Gain", produit.gain, "/ Valeur stock", produit.valeur_stock)

produit.cost = 20
produit.total_cost = produit.cost * (produit.number_sell+produit.stock)
console.log("Somme d'achâts des produits :", produit.total_cost)

let benefice_par_produit = produit.price - produit.cost
console.log("Bénéfice par produit", benefice_par_produit)

let pourcentage_benefice = 100 * (benefice_par_produit / produit.price)
console.log("Bénéfice par produit :", pourcentage_benefice + "% ~", Math.round(pourcentage_benefice) + "%")