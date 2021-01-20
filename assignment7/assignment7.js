console.log("Lucas and John are trying to compare their BMI (Body Mass Index)")

let massLucas;
let massJohn;

let heightLucas;
let heightJohn;

// Test DATA 1
massLucas = 78;
massJohn = 92;

heightLucas = 1.69;
heightJohn = 1.95;

let lucasBmi = massLucas / heightLucas ** 2;
let johnBmi = massJohn / heightJohn ** 2;


let outputJohn = `Lucas and John are friends, Lucas is ${heightLucas} m tall and John is ${heightJohn} m tall. So John has a higher BMI than Lucas, that is ${johnBmi} `;

let outputLucas = `Lucas and John are friends, Lucas is ${heightLucas} m tall and John is ${heightJohn} m tall. So Lucas has a higher BMI than John, that is ${lucasBmi} `;

if (johnBmi > lucasBmi)
    console.log(outputJohn)
else console.log(outputLucas);

// TEST DATA 2

massLucas = 95;
massJohn = 85;

heightLucas = 1.88;
heightJohn = 1.76;

lucasBmi = massLucas / heightLucas ** 2;
johnBmi = massJohn / heightJohn ** 2;

outputJohn = `Lucas and John are friends, Lucas is ${heightLucas} m tall and John is ${heightJohn} m tall. So John has a higher BMI than Lucas, that is ${johnBmi} `;

outputLucas = `Lucas and John are friends, Lucas is ${heightLucas} m tall and John is ${heightJohn} m tall. So Lucas has a higher BMI than John, that is ${lucasBmi} `;

if (johnBmi > lucasBmi)
    console.log(outputJohn)
else console.log(outputLucas);

