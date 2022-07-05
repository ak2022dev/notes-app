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
});

