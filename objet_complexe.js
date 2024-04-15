var my_object = {
    firstName: "Jean",
    lastName: "Dupont",
    options: {
            name: "Options 1",
             testing: true
             }
}

var my_tree = {
    firstName: "Jean",
    lastName: "Dupont",
    birth: 1910,
    death: 1943,
    children: [
        {
        firstName: "Jean Junior",
        lastName: "Dupont",
        birth: 1930,
        death: 1973,
        children: [

        ]
        }
    ]

    
}

my_tree.children.push({
    firstName: "Jean Junior 2",
    lastName: "Dupont 2",
    birth: 1935,
    death: 1979,
    children: [

    ]
    }
)

my_tree.children = []

console.log(my_tree.children)


var tab = ["lastName","fistName","options"]

// console.log(my_object[tab[0]]) //