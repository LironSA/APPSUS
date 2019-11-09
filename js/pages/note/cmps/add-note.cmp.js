'use strict';

export default {
    template: `
        <form @submit.prevent="addNote" class="add-note flex row justify-center">
            <input id="addNote" type="text" :placeholder="currPlaceholder" ref="txtInput" v-model="noteData.content">    
            <select class="note-to-add flex" id="selectNoteType" v-model="noteData.noteType">
                <option value="txt-note-prv"><i class="fa fa-font"></i></option>
                <option value="todo-note-prv"><i class="fa fa-list-alt"></i></option>
                <option value="img-note-prv"><i class="fa fa-image-polaroid"></i></option>        
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
        addNote(ev) {
            this.$emit('addNote', this.noteData);
            console.log('this.$ref: ', this.$refs)
            this.$refs.txtInput.value = '';
        }
    }
}
