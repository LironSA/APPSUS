'use strict';
import { noteService } from './note-service.js'
import addNote from './cmps/add-note.cmp.js'
import noteList from './cmps/note-list.cmp.js'

export default {
    template: `
            <section class="notes-app-container flex justify-center">
            <add-note @addNote="addNote"></add-note>
            <note-list v-if="notes" :notes="notes"></note-list>
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
                this.notes = notes
            })
        eventBus.$on('bgcChange', (data) => {
            noteService.setNoteProperty(data)
        })

    },
    methods: {
        addNote(note) {
            console.log(note, 'note in note.cmp');
            noteService.addNote(note)
        },
        
    }
}