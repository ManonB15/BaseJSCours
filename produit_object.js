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

