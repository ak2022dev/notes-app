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
  it ('Adds one to count of divs every time a note is added using the model', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    model.addNote('First note');
    model.addNote('Second note');
    const view = new NotesView(model);
    view.displayNotes();
    // The notesView starts with one empty div in it
    expect(document.querySelectorAll('div').length).toBe(3);
  })
  it ('Adds one to count of divs when a note is added using button clicks', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    const buttonEl = document.querySelector('#add-input-button');
    // The notesView starts with one empty div in it
    expect(document.querySelectorAll('div').length).toBe(1);
    buttonEl.click();
    // After button clicked there is an additional div
    expect(document.querySelectorAll('div').length).toBe(2);
//    view.displayNotes();
  })
  it( 'Clears previously displayed notes before displaying all notes including new ones',
    () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    const buttonEl = document.querySelector('#add-input-button');
    // The notesView starts with one empty div in it
    // After button clicked there is an additional div
    buttonEl.click();
    expect(document.querySelectorAll('div').length).toBe(2);
    // After second button click there it removes earlier notes
    // then lists so that they're not listed repeatedly
    buttonEl.click();
    expect(document.querySelectorAll('div').length).toBe(3);    
  } )

});
