'use strict';

import { storageService } from '../../services/util-service.js'
import { makeId } from '../../services/util-service.js'

export const noteService = {
    getNotes,
    removeNotes,
}
const NOTES_KEY = 'notes'

var gNotes;

function getNotes() {
    let notes = storageService.load(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = DEFUALT_NOTES
        storageService.store(NOTES_KEY, notes)
        gNotes = notes;
    }else{
        gNotes = notes;
    }
    return Promise.resolve(gNotes)
}

function removeNotes(id) {
    var idx = gNotes.findIndex(note => note.id === id);
    if (idx !== -1){
       let note= gNotes.splice(idx, 1)
       console.log('note:',note);
    }  
    storageService.store(NOTES_KEY, gNotes)
    return Promise.resolve();
}


const DEFUALT_NOTES = [
    { id: makeId(), type: 'p', content:'Lorem ipsum, dolor sit amet, consectetur, adipisicing elit. Facilis, corporis!', isPinned: true, style: {color, bgc, font, 'font-size':'10px' }, createdAt: 1554580930594 },
    { id: makeId(), type: 'ul', content:'Lorem ipsum, dolor sit amet, consectetur adipisicing, elit. Facilis, corporis!', isPinned: true, style: {color, bgc, font, 'font-size':'10px' }, createdAt: 1664580930594 },
    { id: makeId(), type: 'p', content:'onsectetur adipisicing elit. Facilis, corporis!', isPinned: true, style: {color, bgc, font, 'font-size':'10px' }, createdAt: 1554580930594 },
    { id: makeId(), type: 'ul', content:'r sit, amet consectetur, adipisicing elit. Facilis, corporis!', isPinned: true, style: {color, bgc, font, 'font-size':'10px' }, createdAt: 1664580930594 },
   ]

getEmails();
