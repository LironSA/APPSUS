'use strict';

import styleModal from './note-style-modal.cmp.js'


export default {
    props: ['note'],
    template: `
            <section class="edit-note-menu">
                <section value="" disabled="disabled" class="note-color-btn" @click="toggleStyleModal">
                    <img src="img/palette1.png" alt="">
                </section>
                <style-modal v-if="isModalActive" :noteId="note.id"><img src="img/color_palet.JPG" alt=""> </style-modal>   
                <section class="note-delete-btn" @click="removeNote(note.id)">
                    <img src="img/trash1.png" alt=""> </section>
                <section class="note-pinned-btn" @click="togglePinNote(note.id)">
                    <img style="fill:blue"src="img/pin1.png" alt="">
                </section>
            </section>
    `,
    data() {
        return {
            isModalActive: false,
            hover: true
        }
    },

    methods: {
        toggleStyleModal() {
            this.isModalActive = !this.isModalActive;
        },
        togglePinNote(id) {
            eventBus.$emit('togglePinNote', id)
        },
        removeNote(id) {
            eventBus.$emit('removeNote', id)
        },
    },
    components: {
        styleModal
    },
}



