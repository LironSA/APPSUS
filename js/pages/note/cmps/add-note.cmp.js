'use strict';

export default {
    template: `
        <form @submit.prevent="addNote" class="add-note flex justify-center">
            <input id="addNote" type="text" placeholder="currPlaceholder" noteData.content>    
            <select id="selectNoteType" v-model="noteData.noteType">
            <option value="txt-note-prv">text</option>
            <option value="todo-note-prv">todo</option>
            <!-- <option value="isRead">img</option>
            <option value="isRead">vidio</option>
            <option value="UnRead">audio</option> -->
            
            </select>
            <button >Add note </button>
        </form>
    `,
    data() {
        return {
            noteData: {
                noteType: 'txt-note-prv',
                content: ''
            }
        }
    },
    computed: {
        currPlaceholder() {
            let placeholder;
            if (this.noteData.noteType === 'txt-note-prv')
                placeholder = "Enter your text note..";
            if (this.noteData.noteType === 'todo-note-prv')
                placeholder = "Enter comma seperated list...";

            console.log('placeholder: ', placeholder)
            return placeholder
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.noteData)
        }
    }
}
