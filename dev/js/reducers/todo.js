function noteReducer(state= [], action){
	switch(action.type){
		case 'ADD_NOTE':
			return [...state, {
				noteId: action.noteId,
				text: action.text,
				status: 'active'
			}];
			break;

		case 'EDIT_NOTE':
			console.log('EDIT_NOTE');
			const editIndex= action.index;
			var getState= state;
			getState[editIndex].text= action.text;
			state= getState;
			return [...state];
			break;

		case 'DELETE_NOTE':
			const delIndex= action.index;
			return [
				...state.slice(0, delIndex),
				...state.slice(delIndex+1)
			]
			break;

		case 'CHECK_NOTE':
			const checkIndex= action.index;
			var getState= state;
			getState[checkIndex].status= 'done';
			state= getState;
			return [...state];
			break;

		case 'UNCHECK_NOTE':
			const unCheckIndex= action.index;
			var getState= state;
			getState[unCheckIndex].status= 'active';
			state= getState;
			return [...state];
			break;

		default:
			return state;
	}
	return state;
}


export default noteReducer;