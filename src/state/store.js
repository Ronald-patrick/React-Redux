import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index"


const initial = localStorage.getItem('amount') ? parseInt(localStorage.getItem('amount'))   : 0
console.log(initial);

export const store = createStore(reducers,{
	amount:initial
},
	applyMiddleware(thunk))