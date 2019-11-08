'use strict';

export default {
    template: `
        <form @submit.prevent="addNote" class="add-note flex justify-center">
            <input id="addNote" type="text" :placeholder="currPlaceholder" v-model="noteData.content">    
            <select id="selectNoteType" v-model="noteData.noteType">
            <option value="txt-note-prv">Text</option>
            <option value="todo-note-prv">Todo</option>
            <option value="img-note-prv">Image</option>        
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
            console.log('placeholder: ', placeholder)
            if (this.noteData.noteType === 'txt-note-prv') placeholder = "Enter your text note...";
            if (this.noteData.noteType === 'todo-note-prv') placeholder = "Enter comma seperated list...";
            if (this.noteData.noteType === 'img-note-prv') placeholder = "Enter image url...";
            return placeholder
        }
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.noteData)
        }
    }
}
