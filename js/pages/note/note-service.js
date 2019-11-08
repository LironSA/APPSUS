'use strict';

import { storageService } from '../../services/util-service.js'
import { makeId } from '../../services/util-service.js'

export const noteService = {
    getNotes,
    removeNote,
    setNoteProperty,
    addNote,
}
const NOTES_KEY = 'notes'

var gNotes;

function getNotes() {
    let notes = storageService.load(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = DEFUALT_NOTES
        storageService.store(NOTES_KEY, notes)
        gNotes = notes;
    } else {
        gNotes = notes;
    }
    return Promise.resolve(gNotes)
}

function addNote(noteObj) {
    const note = {
        id: makeId(),
        type: noteObj.noteType,
        content: noteObj.content,
        isPinned: false,
        backgroundColor: '#fff',
        createdAt: Date.now()
    }
    gNotes.unshift(note)
    storageService.store(NOTES_KEY, gNotes)
    console.log('here' ,note);
    const msg = {
        txt: `Added to notes`,
        type: 'success'
    }
    // return Promise.resolve(msg)
}
function removeNote(id) {
    var idx = gNotes.findIndex(note => note.id === id);
    if (idx !== -1) {
        let note = gNotes.splice(idx, 1)
        console.log('note:', note);
    }
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve();
}

// {id, prop, val}
function setNoteProperty(data) {
    var idx = gNotes.findIndex(note => note.id === data.id);
    if (idx !== -1) {
        console.log("data:", data)
        gNotes[idx][data.prop] = data.val
        storageService.store(NOTES_KEY, gNotes)
        // return Promise.resolve();
    }
}



const DEFUALT_NOTES = [
    { id: makeId(), type: 'txt-note-prv', content: 'Lorem ipsum, dolor sit amet, consectetur, adipisicing elit. Facilis, corporis!', isPinned: true,'backgroundColor': 'yellow', createdAt: 1554580930594 },
    { id: makeId(), type: 'todo-note-prv', content: 'Lorem ipsum, dolor sit amet, consectetur adipisicing, elit. Facilis, corporis!', isPinned: true, 'backgroundColor': 'pink', createdAt: 1664580930594 },
    { id: makeId(), type: 'txt-note-prv', content: 'onsectetur adipisicing elit. Facilis, corporis!', isPinned: true, 'backgroundColor': 'blue', createdAt: 1554580930594 },
    { id: makeId(), type: 'todo-note-prv', content: 'r sit, amet consectetur, adipisicing elit. Facilis, corporis!', isPinned: true, 'backgroundColor': 'red', createdAt: 1664580930594 },
]

getNotes()
