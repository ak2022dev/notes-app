/**
 * @jest-environment jsdom
 */

// File: notesView.test.js

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('Page view', () => {
  it ('Starts out with a count of one for empty notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new NotesView();
    // The notesView starts with one empty div in it
    expect(document.querySelectorAll('div').length).toBe(1);
  })
  it ('It adds one to count of divs every time a note is added', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    model.addNote('First note');
    model.addNote('Second note');
    const view = new NotesView(model);
    view.displayNotes();
    // The notesView starts with one empty div in it
    expect(document.querySelectorAll('div').length).toBe(3);
  })

});
