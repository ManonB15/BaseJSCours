var people_formation = [                                                                    //Création du tableau//
    {                                                                                       //Déclaration variable 1//
        firstName: "Toinon",
        lastName: "Chrétien",
        age: 21,
        dateStart: 2002,
        lieu_de_naissance: "Belfort",
    },
    {                                                                                       //Déclaration variable 2//
        firstName: "Manon",
        lastName: "Bourrey",
        age: 23,
        dateStart: 2000,
        lieu_de_naissance: "Belfort",  
    }
]



//people_formation.pop()//                                                                      //Je retire le dernier élément du tableau//


people_formation.push(                                                                      //J'ajoute un élément au tableau//
    {
    firstName: "Alexandre",
    lastName: "Porteron",
    age: 30,
    dateStart: 1993,
    lieu_de_naissance: "Troyes",  
    }
)


for (var i = 0; i < 100; i++) {
    people_formation.push(                                                                      //J'ajoute un élément au tableau//
    {
        firstName: "Louis"+i,
        lastName: "Porteron"+i,
        age: 30+i,
        dateStart: 1993,
        lieu_de_naissance: "Troyes",  
    }
  )
}




for (var i = 0; i < people_formation.length; i++) 
{
    if (people_formation[i].firstName === "Louis55")
    {
    console.log("\nPrénom :", people_formation[i].firstName)
    console.log("Nom :", people_formation[i].lastName)
    console.log("Age :", people_formation[i].age)
    console.log("Date de naissance :", people_formation[i].dateStart)
    console.log("Lieu de naissance :", people_formation[i].lieu_de_naissance,"\n")
    console.log(`Il est à la ${i} position dans le tableau`)
    }
}

var table_more_than_50 =[]

for (var i = 0; i < people_formation.length; i++){
    if (people_formation[i].age > 50)
    {
        table_more_than_50.push({...people_formation[i]})
    }
}

console.log(`J'ai ${table_more_than_50.length} personne(s) qui ont plus de 50 ans dans le tableau`)
console.log("Il y a", people_formation.length, "personne(s) dans la formation.\n")
//console.log(`Il y a ${people_formation.length} personne(s) dans la formation.`)//             //Version alternative//


//Stockage d'un élément unique avec Obj//
var obj_people = {}
for (var  i = 0; i < people_formation.length; i++) {
    obj_people[people_formation[i].firstName] = people_formation[i]
}
console.log(obj_people['Louis55'])