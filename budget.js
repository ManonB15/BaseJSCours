
var data = [                                                                                                                            //Déclaration du tableau pour les types de loisirs, leur descriptions associées et leur range de prix//
    {
        type: "Santé",
        description:[ "Problème AVC", "Rdv scanner"],
        priceMax: 1000,
        priceMin: 30,
    },
    {
        type: "Loisir",
        description:["Kayak","Bowling", "Cinéma"],
        priceMax: 100,
        priceMin: 10,
    },
    {
        type: "Sortie",
        description: ["Sortie voyage","Sortie entre amis"],
        priceMin: 50,
        priceMax: 400,
    },
    {
       type: "Loyer",
       description: ["Electricité","Gaz"],
       priceMin: 800,
       priceMax: 1600,
    },
    {
        type: "Voiture",
        description: ["Garage","Entretient", "Controle technique"],
        priceMin: 200,
        priceMax: 1400,
     }
]

var wallet = {                                                                                                                          //Déclaration de l'objet Wallet contenant le tableau des dépenses//
    depenses :[],
}

var min = 713251378
var max = 1713251378

for (var i = 0; i < 1000; i++)
{
    var object_type = data[Math.round(Math.random() * ((data.length-1) - 0) + 0)]                                                       //Défini quel type de loisirs je vais chercher//
    var object_description = object_type.description[Math.round(Math.random() * ((object_type.description.length-1) - 0) + 0)]          //Défini quelle description de loisirs je vais chercher//

    wallet.depenses.push                                                                                                                //Ajout des informations dans le tableau dépenses//
    (
        {
            date: Math.round(Math.random() * (max - min) + min),                                                                        //La date est choisie aléatoirement entre 2 variables déclarées par min et max//
            types: object_type.type,                                                                                                    //La date est déclarée avec la variable object_type//
            price: Math.round(Math.random() * (object_type.priceMax-object_type.priceMin) + object_type.priceMin),                      //Le prix est choisi aléatoirement entre les valeurs annoncées dans le tableau//
            description: object_description,                                                                                            //La description est déclarée avec la variable object_description//
        }

    )

}

console.log(wallet.depenses)                                                                                                            //J'affiche mon objet de valeurs avec son tableau//
console.log ("Taille tableau", wallet.depenses.length)
