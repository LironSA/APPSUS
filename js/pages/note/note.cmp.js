'use strict';
import { noteService } from './note-service.js'
import addNote from './cmps/add-note.cmp.js'
import noteList from './cmps/note-list.cmp.js'
export default {
    template: `
            <section class="notes-app-container flex justify-center">
            <add-note></add-note>
            <note-list v-if="notes":notes="notes"></note-list>
            </section>
            `,
    components: {
        addNote,
        noteList
    },
    data() {
        return {
            notes: []
        }
    },

    created() {
        noteService.getNotes()
            .then(notes => {
                console.log('notes from service', notes);
                this.notes = notes
            })
        eventBus.$on('bgcChange', (data) => {
           noteService.setNoteProperty(data)
        })
       
    }
}