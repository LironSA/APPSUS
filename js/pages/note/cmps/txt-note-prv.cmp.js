'use strict'

import notePrvMenu from  './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
    <section class="txt-note-prv-container flex col" v-if="note" :style="bgColor" @mouseover="hover = true" @mouseleave="hover=false">
        <p>{{note.content}}</p>
        <note-prv-menu class="note-prv-menu " v-if="hover" :note='note'> </note-prv-menu>
    </section>
     `,
     data() {
        return {
            hover: false
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
