'use strict';

export default {
    template: `
        <section class="add-note flex justify-center">
            <input id="addNote" type="text" :placeholder="currPlaceholder" ref="txtInput" v-model="noteData.content">    
                <div class="add-note-btns flex ">
                    <div class="add-note-btn" @click="changeNoteType('txt-note-prv')" ><i class="fa fa-font"></i></div>
                    <div class="add-note-btn" @click="changeNoteType('todo-note-prv')" ><i class="fa fa-list-alt"></i></div>
                    <div class="add-note-btn" @click="changeNoteType('img-note-prv')" >img</div>        
                    <div class="add-note-btn" @click="changeNoteType('vid-note-prv')" >vid</div>        
                </div>
            <button @click="addNote" >Add note </button>
        </section>
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
            if (this.noteData.noteType === 'txt-note-prv') placeholder = "Enter your text note...";
            if (this.noteData.noteType === 'todo-note-prv') placeholder = "Enter comma seperated list...";
            if (this.noteData.noteType === 'img-note-prv') placeholder = "Enter image url...";
            if (this.noteData.noteType === 'vid-note-prv') placeholder = "Enter video url...";
            return placeholder
        }
    },
    methods: {
        addNote(ev) {
            if(this.noteData.content){
            this.$emit('addNote', this.noteData);
            this.$refs.txtInput.value = '';
            }else{
                console.log('please enter text');
                //use user-msg if we got time
            }
        },
        changeNoteType(typeStr) {
            this.noteData.noteType = typeStr
        }
    }
}
