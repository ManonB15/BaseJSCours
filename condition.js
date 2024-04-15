var age =13;                                        //Déclaration variable//
var authorized = false                              //Autorisé: non//

if (age>=18) {                                      //Si l'âge est supérieur à 18, tu executes//
    console.log("Tu es majeur !")
    authorized = true
}

else {
    console.log("Tu est mineur !")                  //Si l'âge est inférieur tu executes//
}

console.log(`Autorisé : ${authorized}`)             //Affiché autorisé//

var authorized2 = age >= 18 ? true : false          //Condition ternaire//
console.log(`Autorisé : ${authorized2}`) 