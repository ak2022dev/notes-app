// File: notesView.js

class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-input-button');
    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(document.querySelector('#note-input').value);
      this.displayNotes();
    });
  }

  displayNotes() {
    // First remove all elements of class 'note'
    // which may have been drawn by a previous click
    let oldEl;
    while( (oldEl = document.querySelector('.note')) !== null ) {
      oldEl.remove();
    }
    // And clear the previous entry from the input field
    document.querySelector('#note-input').value = "";
    const notes = this.model.getNotes();
    notes.forEach( note => {
      const newDiv = document.createElement('div');
      newDiv.innerText = note;
      newDiv.className = 'note';
      this.mainContainerEl.append(newDiv);
    });
  }
  
}

module.exports = NotesView;
