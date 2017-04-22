//ADD NOTE
export function addNote(text){
	console.log("add note triggered");
	return{
		type: 'ADD_NOTE',
		text
	}
}

//EDIT NOTE
export function editNote(id, text){
	return{
		type: 'EDIT_NOTE',
		id,
		text
	}
}

//DELETE NOTE
export function deleteNote(id){
	return{
		type: 'DELETE_NOTE',
		id
	}
}

//CHECK NOTE
export function checkNote(id){
	return{
		type: 'CHECK_NOTE',
		id
	}
}

//UN CHECK NOTE
export function unCheckNote(id){
	return{
		type: 'UNCHECK_NOTE',
		id
	}
}