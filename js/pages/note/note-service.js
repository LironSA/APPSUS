'use strict';

import { storageService } from '../../services/util-service.js'
import { makeId } from '../../services/util-service.js'

export const noteService = {
    getNotes,
    removeNote,
    togglePinNote,
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
function getVidUrl(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
        return '//www.youtube.com/embed/' + match[2];
    } else {
        return 'error';
    }
}
function addNote(noteObj) {
    if(noteObj.noteType==='vid-note-prv'){
        noteObj.content=getVidUrl(noteObj.content)
    }
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

function togglePinNote(id) {
    var idx = gNotes.findIndex(note => note.id === id);
    if (idx !== -1) {
        gNotes[idx].isPinned = !gNotes[idx].isPinned
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
    }
}



const DEFUALT_NOTES = [
    { id: makeId(), type: 'vid-note-prv', content: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1', isPinned: true,'backgroundColor': 'yellow', createdAt: 1554580930594 },
    { id: makeId(), type: 'img-note-prv', content: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png', isPinned: true, 'backgroundColor': 'pink', createdAt: 1664580930594 },
    { id: makeId(), type: 'txt-note-prv', content: 'onsectetur adipisicing elit. Facilis, corporis!', isPinned: true, 'backgroundColor': 'blue', createdAt: 1554580930594 },
    { id: makeId(), type: 'todo-note-prv', content: 'r sit, amet consectetur, adipisicing elit. Facilis, corporis!', isPinned: true, 'backgroundColor': 'red', createdAt: 1664580930594 },
]

getNotes()
