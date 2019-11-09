'use strict'

import notePrvMenu from  './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
    <section @mouseover="hover = true" @mouseleave="hover=false" 
    class="txt-note-prv-container flex col align-center justify-center" v-if="note" :style="bgColor">
        <p>{{note.content}}</p>
        <note-prv-menu class="note-edit-menu col" v-if="hover" :note='note'> </note-prv-menu>
    </section>
     `,
     data() {
        return {
            hover:false
        }
    },
    computed: {
        bgColor() {
            return {'backgroundColor': this.note.backgroundColor}
        }
    },
    components: {
        notePrvMenu
    }
}


        