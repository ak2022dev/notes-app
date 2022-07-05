// File: notesModel.test.js

const NotesModel = require('./notesModel');

//beforeEach( () => {
//  const mode = new NotesModel();
//});

describe('NotesModel', () => {
  it( 'starts off empty', () => {
    const mode = new NotesModel();
    expect(mode.getNotes()).toEqual([]);
  });
  it( 'remembers notes added', () => {
    const mode = new NotesModel();
    mode.addNote('Buy milk');
    mode.addNote('Go to the gym');
    expect(mode.getNotes()).toEqual([ 'Buy milk', 'Go to the gym' ]);
  });
  it( 'can be reset', () => {
    const mode = new NotesModel();
    mode.addNote('Buy milk');
    mode.addNote('Go to the gym');
    mode.reset();
    expect(mode.getNotes()).toEqual([]);
  });
  
});

