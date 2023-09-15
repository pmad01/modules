//Importing module
// import './shoppingCart.js'
// import {addToCart, totalPrice as price, tq} from "./shoppingCart.js";
// addToCart('bread', 5);
// console.log({
// 	price,
// 	tq
// });

// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 5);
// console.log({
// 	totalPrice: ShoppingCart.totalPrice,
// 	tq: ShoppingCart.tq
// });

import {cart, addToCart as add }  from './shoppingCart.js'
add('pizza', 2);

// Not empty, import is not simply a copy of the value we exported, it is a live connection
console.log(cart);


//Top level await, without async, only works in modules, blocks the execution of the module
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('smth')

// const getLastPost = async function() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await res.json();
// 	console.log(data);
// 	return {title: data.at(-1).title, text: data.at(-1).body}
// }

//Top level await
// const lastPost = await getLastPost();
// console.log(lastPost)

//When importing a module that has a top level array, it will wait for the blocking code to finish execution and then import it

//Module pattern
// const ShoppingCart2 = (function() {
// 	const cart = [];
// 	const shippingCost = 10;
// 	const totalQuantity = 23;
// 	const addToCart = function (product, quantity) {
// 		cart.push({product, quantity});
// 		console.log({
// 			quantity,
// 			product
// 		});
// 	}
//
// 	return {
// 		addToCart,
// 		cart,
// 		totalQuantity,
// 		shippingCost
// 	}
// })();
//
// ShoppingCart2.addToCart('apple', 4);

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
	cart: [
		{product: 'bread', quantity: 5}
	],
	user: {loggedIn: true}
}

const stateClone = Object.assign({}, state);
//using lodash
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
//It is false too now in the clone
console.log(stateClone);
//true in the deep clone, not changed
console.log(stateDeepClone);

//never include node modules when sharing, only package.json, then run npm i in the terminal.

//if we change a module it triggers a rebuild without triggering the whole page reload
if(module.hot) {
	module.hot.accept()
}