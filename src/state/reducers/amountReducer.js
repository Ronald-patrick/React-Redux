const amountReducer = (state = 0,action)=>{

	if(action.type==='deposit')
	{
		localStorage.setItem('amount', state + action.payload)
		return state + action.payload
	}

	else if(action.type==='withdraw')
	{
		localStorage.setItem('amount', state - action.payload)
		return state - action.payload
	}

	else{
		return state
	}
	
}

export default amountReducer;