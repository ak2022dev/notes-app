// File: notesModel.js

class NotesModel {

  constructor() {
    this.notes = [];
  };
  
  getNotes() {
    return this.notes;
  };
  
  addNote( note ) {
    // note is a string
    this.notes.push( note );
  };

  reset() {
    this.notes = [];
  };
  
};

module.exports = NotesModel;
