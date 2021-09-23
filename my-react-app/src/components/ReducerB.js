const initialState = {
	counterB:1
};

const ReducerB = (state = initialState, action) => {
	if(action.type === "UPDATE_B"){
		return {
			...state,
			counterB: action.aValue + state.counterB
		};
	}
	return state;
};

export default ReducerB;