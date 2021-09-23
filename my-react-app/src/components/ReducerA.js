const initialState = {
	counterA:1
};

const ReducerA = (state = initialState, action) => {
	if(action.type === "UPDATE_A"){
		return {
			...state,
			counterA: state.counterA + action.bValue
		};
	}
	return state;
};

export default ReducerA;