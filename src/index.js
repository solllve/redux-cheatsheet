import store from './store';
import { bugAdded, bugResolved } from './actions';

//ui components should subscribe to the store
//this could create memory leaks
const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState());
});

store.dispatch(bugAdded("a new bug"));
store.dispatch(bugResolved(1));
// state = reducer(state,action)
// notify the subscribers

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })

unsubscribe();

console.log(store.getState());

// import { compose, pipe } from 'lodash/fp';
// import {Map} from 'immutable';
// import {produce} from 'immer';

// // Create small functions that build large complex functions

// // function sayHello() {
// //     return 'Hello';
// // }
// // // let fn = sayHello;

// // function greet(fnmessage) {
// //     console.log(fnmessage());
// // }

// // greet(sayHello);

// // function greet(fn) {
// //     console.log(fn());
// // }
// // //higher order functions
// // //functions are first class citizens
// // function sayHello() {
// //     return function() {
// //         return 'Hello World';
// //     }
// // }

// // // let fn = sayHello();
// // // let message = fn();

// // let numbers = [1, 2, 3, 4, 5];
// // numbers.map(number => number * 2);

// // //higher ordeer function
// // setTimeout(() => {
// //     console.log('Hello');
// // }, 1000);

// // let input = " Javascript ";
// // let Output = "<div>" + input.trim() + "</div>";

// // const trim = str => str.trim();

// // //define a template literal
// // // const wrapInDiv = str => `<div>${str}</div>`;

// // //this is currying
// // const wrap = type => str => `<${type}>${str}</${type}>`;

// // const toLowerCase = str => str.toLowerCase();
// // //trim
// // // wrapInDiv

// // // const result = wrapInDiv(toLowerCase(trim(input)));

// // //Lodash to simplify code
// // // Popular utility library for javascript

// // //makes code cleaner makes compose from left to right
// // const transform = pipe(trim, toLowerCase, wrap('div'));
// // console.log(transform(input));

// //Updating objects

// //Old way of updating objects
// // const person = { name: "john"};
// // const updated = Object.assign({}, person, {name: "Bob", age: 30});
// // console.log(updated)

// //Better way of updating objects Spread Operator
// const person = { 
//     name: "john",
//     address: {
//         country: 'usa',
//         city: 'san francisco'
//     }
// };
// const updated = {
//     ...person, 
//     address: {
//         ...person.address,
//         city: 'New York'
//     },
//     name: "Bob",
// }
// console.log(updated)


// //immutable arrays
// const numbers = [1, 2, 3];
// //object spread operater 
// const index = numbers.indexOf(2);
// const findtwo = [...numbers.slice(0, index), 4,];
// const added = [
//     ...numbers.slice(0, index), 
//     4,
//     ...numbers.slice(index)
// ];

// console.log(added)

// //Removing lets remove 2

// //return all elements except 2
// const removed = numbers.filter(n => n !== 2)
// console.log(removed)
// // now 2 is gone

// //Updating elements turn 2 into 20
// const updatedn = numbers.map(n => (n === 2 ? 20: n));
// console.log(updatedn)

// //Immutable JS

// // let book = Map({
// //     title: 'Ego is the Enemy'
// // });

// // function publish(book) {
// //     return book.set('published', true);
// // }

// // book = publish(book);

// // //returns js title
// // console.log(book.get('title'));
// // //returns js object
// // console.log(book.toJS());


// //Immer

// let book = {
//     title: 'Ego is the Enemy'
// };

// function publish(book) {
//     return produce(book, draftBook => {
//         draftBook.isPublished = true;
//     })
// }

// let updatedb = publish(book);

// //returns js title
// console.log(book);
// console.log(updatedb);



