'use strict';
import { noteService } from './note-service.js'
import addNote from './cmps/add-note.cmp.js'
import noteList from './cmps/note-list.cmp.js'
export default {
    template: `
            <section class="notes-app-container flex justify-center col">
            <add-note @addNote="addNote"></add-note>
            <note-list v-if="pinnedNotes.length>0":notes="pinnedNotes"></note-list>
            <note-list v-if="unPinnedNotes.length>0":notes="unPinnedNotes"></note-list>
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
        eventBus.$on('togglePinNote', (id) => {
            noteService.togglePinNote(id)
        })
        eventBus.$on('removeNote', (id) => {
            noteService.removeNote(id)
        })
        console.log('blibala');
    },
    methods: {
        addNote(note) {
            console.log(note, 'note in note.cmp');
            noteService.addNote(note)
        },
    },
    computed: {
        pinnedNotes() {
            return this.notes.filter(note => {
                return note.isPinned
            })
        },
        unPinnedNotes() {
            return this.notes.filter(note => {
                return !note.isPinned
            })
        }
    }
}