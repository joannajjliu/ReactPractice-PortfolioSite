import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp'

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second district']}/>, document.getElementById("app"));

class OldSyntax {
    constructor() {
        this.name = "Jojo";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi, my name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

//-------------

class NewSyntax {
    name = "Jojo2"
    getGreeting = () => {
        return `Hi, my name is ${this.name}.`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
/* Default and named import examples for person.js and utils.js */
// import validator from 'validator';

// console.log("isEmail: ", validator.isEmail('test@gmail.com'));

// import theDefaultExport, { add, square } from './utils.js'

// console.log("app.js is running!!!!");

// console.log(square(6));
// console.log(add(200,3));
// console.log("subtract: ", theDefaultExport(200, 50));

// import isSenior, { canDrink, isAdult } from './person.js';

// console.log('canDrink: ', canDrink(20));
// console.log('isAdult: ', isAdult(14));
// console.log('isSenior: ', isSenior(70));
