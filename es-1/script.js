const array = [];


while (array.length < 10) {
    let randNum = (Math.floor(Math.random() * 10) + 1);

    if (!array.includes(randNum)) {
        array.push(randNum);
    }
    // if (array.includes(randNum) === false) {
    //     array.push(randNum);
    // }
        
};

console.log(array);