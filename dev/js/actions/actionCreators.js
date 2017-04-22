//ADD NOTE
export function addNote(noteId, text){
	console.log("add note triggered");
	return{
		type: 'ADD_NOTE',
		noteId,
		text
	}
}

//EDIT NOTE
export function editNote(text, noteId, index){
	return{
		type: 'EDIT_NOTE',
		text,
		noteId,
		index
	}
}

//DELETE NOTE
export function deleteNote(noteId, index){
	return{
		type: 'DELETE_NOTE',
		noteId,
		index
	}
}

//CHECK NOTE
export function checkNote(noteId, index){
	return{
		type: 'CHECK_NOTE',
		noteId,
		index
	}
}

//UN CHECK NOTE
export function unCheckNote(noteId, index){
	return{
		type: 'UNCHECK_NOTE',
		noteId,
		index
	}
}