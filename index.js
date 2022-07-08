const NotesModel = require('./notesModel');

console.log('The notes app is running, great');

const model = new NotesModel();

model.addNote('This is an example note.');
console.log(model.getNotes());

