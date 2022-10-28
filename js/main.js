console.log("MASYVAI");
console.log("1 uzd");
console.log(myArray);
myArray = [];
for(let i = 0; i < 6; i++){
    myArray[i] = [];
    for(let a = 0; a < 8; a++){
        myArray[i][a] = ((Math.round(Math.random() * 20)) + 5);
    }
}
console.log(myArray);

