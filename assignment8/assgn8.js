// Part A
//Test data 1
let nets1 = 96;
let nets2 = 108;
let nets3 = 89;

let knicks1 = 88;
let knicks2 = 91;
let knicks3 = 110;

let netsAvg = ((nets1 + nets2 + nets3) / 3);
let knicksAvg = ((knicks1 + knicks2 + knicks3) / 3);

console.log('Nets Average Score: ' + netsAvg);
console.log('Knicks Average Score: ' + knicksAvg);

if (netsAvg >= 100 && netsAvg > knicksAvg) {
    console.log('Nets Won! Knicks Lost');
} else if (netsAvg >= 100 && knicksAvg >= 100 && netsAvg == knicksAvg) {
    console.log('It is a TIE!');
} else if (knicksAvg >= 100 && knicksAvg > netsAvg) {
    console.log('Knicks Won! Nets Lost');
} else {
    console.log('No team wins the trophy');
}

//Test data 2
nets1 = 97;
nets2 = 112;
nets3 = 101;

knicks1 = 109;
knicks2 = 95;
knicks3 = 123;

netsAvg = ((nets1 + nets2 + nets3) / 3);
knicksAvg = ((knicks1 + knicks2 + knicks3) / 3);

console.log('Nets Average Score: ' + netsAvg);
console.log('Knicks Average Score: ' + knicksAvg);

if (netsAvg >= 100 && netsAvg > knicksAvg) {
    console.log('Nets Won! Knicks Lost');
} else if (netsAvg >= 100 && knicksAvg >= 100 && netsAvg == knicksAvg) {
    console.log('It is a TIE!');
} else if (knicksAvg >= 100 && knicksAvg > netsAvg) {
    console.log('Knicks Won! Nets Lost');
} else {
    console.log('No team wins the trophy');
}

//Test data 3
nets1 = 97;
nets2 = 112;
nets3 = 101;

knicks1 = 109;
knicks2 = 95;
knicks3 = 106;

netsAvg = ((nets1 + nets2 + nets3) / 3);
knicksAvg = ((knicks1 + knicks2 + knicks3) / 3);

console.log('Nets Average Score: ' + netsAvg);
console.log('Knicks Average Score: ' + knicksAvg);

if (netsAvg >= 100 && netsAvg > knicksAvg) {
    console.log('Nets Won! Knicks Lost');
} else if (netsAvg >= 100 && knicksAvg >= 100 && netsAvg == knicksAvg) {
    console.log('It is a TIE!');
} else if (knicksAvg >= 100 && knicksAvg > netsAvg) {
    console.log('Knicks Won! Nets Lost');
} else {
    console.log('No team wins the trophy');
}


// PART B
//TEST DATA 1
let billValue = 275;
let tip;
let output;

if (billValue < 30 || billValue > 300) {
    tip = billValue * 0.2;
    let total = billValue + tip;
    output = `The bill was ${billValue}, the tip was ${tip}, and the total value ${total}`;
    console.log(output);
} else {
    tip = billValue * 0.15;
    let total = billValue + tip;
    output = `The bill was ${billValue}, the tip was ${tip}, and the total value ${total}`;
    console.log(output);
}


//PART C
let farenheit = 86;
let celsius = 15;

function toCelsius(farenheit) {
    return (5 / 9) * (farenheit - 32);
}

function toFarenheit(celsius) {
    return ((9 / 5) * celsius) + 32;
}

output = `${celsius}\u00B0 C is equal to ${toFarenheit(celsius)}\u00B0 F`;
console.log(output);

output = `${farenheit}\u00B0 F is equal to ${toCelsius(farenheit)}\u00B0 C`;
console.log(output);
