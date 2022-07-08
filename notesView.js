// File: notesView.js

class NotesView {

  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
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