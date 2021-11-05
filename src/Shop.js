import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators } from "./state/index"

const Shop = () => {
	const dispatch = useDispatch()
	const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);
	return (
	<div style={{display:'flex',justifyContent:'center'}}>
		<button onClick={() => {depositMoney(1000)} } className="btn p-3 bg-danger text-white m-4 " style={{fontSize:70,width:200}}>
			+
		</button>
		<button onClick={() => {withdrawMoney(1000)} } className="btn p-3 bg-danger text-white m-4" style={{fontSize:70,width:200}}>
			-
		</button>
	</div>
	)
}

export default Shop
