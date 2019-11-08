'use strict';

import styleModal from './note-style-modal.cmp.js'



export default {
    props: ['note'],
    template: `
            <section>
                <button class="note-color-btn" @click="toggleStyleModal" >
                <i class="fa fa-palette"></i></button>
                <style-modal v-if="isModalActive" :noteId="note.id"></style-modal>   
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

    },
    components: {
        styleModal
    },

    created() {
        console.log('MENU CREATED')
    }

}



