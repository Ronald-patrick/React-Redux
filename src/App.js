import React from 'react'
import { useSelector } from 'react-redux'
import Shop from './Shop'

const App = () => {
	const state = useSelector(res => res.amount )
	return (
		<div className="App">
		<div className="text-center bg-primary text-white fw-bold" style={{fontSize:70}}>Rs. {state}</div>
		<Shop/>
    </div>
	)
}

export default App

