// function square (number) {
//     return number * number;
// };

// const square2 = num => num * num;

// console.log(square2(2));

// const getFirstName = name => name.split(' ')[0];

// console.log(getFirstName("Jojo Liu"));

function add (a, b) {
    console.log(arguments[2]);
    return a + b;
}

console.log(add(5,6));

const user = {
    name: 'Jojo',
    cities: ['C1','C2','C3'],
    printPlacesLived() {
        return this.cities.map(city => this.name + " has lived in " + city);
        // this.cities.forEach(city => {
        //     console.log(this.name + ' has lived in ' + city);
        // })
    }
};


console.log(user.printPlacesLived());
console.log(user.cities);

const multiplier = {
    numbers: [4, 5, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());