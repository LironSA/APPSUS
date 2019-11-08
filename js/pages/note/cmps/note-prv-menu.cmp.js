'use strict';

import styleModal from './note-style-modal.cmp.js'


export default {
    props: ['note'],
    template: `
            <section>
                <button class="note-color-btn" @click="toggleStyleModal">
                    <i class="fa fa-palette"></i></button>
                    <style-modal v-if="isModalActive" :noteId="note.id"></style-modal>   
                    <button class="note-delete-btn" @click="removeNote(note.id)" >X</button>
            </section>
    `,


    data() {
        return {
            isModalActive: false
        }
    },

    methods: {
        toggleStyleModal() {
            this.isModalActive = !this.isModalActive;
        },
        removeNote(id) {
            eventBus.$emit('removeNote', id)
        },


    },
    components: {
        styleModal
    },
}



