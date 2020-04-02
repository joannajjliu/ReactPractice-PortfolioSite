import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second district']}/>, document.getElementById("app"));

// ReactDOM.render(
//     <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div> 
//     </Layout>,
//  document.getElementById("app"));

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
