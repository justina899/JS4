console.log("MASYVAI");
console.log("1 uzd");
myArray = [];
for (let i = 0; i < 10; i++) {
    myArray[i] = [];
    for (let a = 0; a < 5; a++) {
        myArray[i][a] = ((Math.round(Math.random() * 20)) + 5);
    }
}
console.log(myArray);

console.log("2 uzd");
console.log("a)");
let didUz10 = 0;
for (let x = 0; x < myArray.length; x++) {
    for (let y = 0; y < myArray[x].length; y++) {
        if (myArray[x][y] > 10) {
            didUz10 += 1;
        }
    }
}
console.log("elementu didesniu uz 10 yra: " + didUz10);

console.log("b)");
let didziausias = 0;
for (let x = 0; x < myArray.length; x++) {
    for (let y = 0; y < myArray[x].length; y++) {
        if (myArray[x][y] > didziausias) {
            didziausias = myArray[x][y];
        }
    }
}
console.log("elementas su didziausia reiksme: " + didziausias);

console.log("c)");
resultArray = [];
for (let a = 0; a < myArray[0].length; a++) {
    resultArray[a] = 0;
}
for (let i = 0; i < myArray.length; i++) {
    for (let a = 0; a < myArray[i].length; a++) {
        resultArray[a] += myArray[i][a];
    }
}
console.log("kiekvieno antro lygio masyvų su vienodais indeksais sumos: " + resultArray);

console.log("d)");
for (let i = 0; myArray.length; i++) {
    for (let x = 5; x < 7; x++) { //meta klaida del x =5 undefined
        myArray[i][x] = ((Math.round(Math.random() * 20)) + 5);
    }
}
console.log("ilgesnis masyvas: " + myArray);