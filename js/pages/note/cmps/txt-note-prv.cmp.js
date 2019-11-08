'use strict'

import notePrvMenu from  './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
    <section class="txt-note-prv-container  flex align-center justify-center" v-if="note" :style="bgColor">
        <p>{{note.content}}</p>
        <note-prv-menu :note='note'> </note-prv-menu>
        <h1 v-if="note.isPinned">TEST for isPinned</h1>
    </section>
     `,
    computed: {
        bgColor() {
            return {'backgroundColor': this.note.backgroundColor}
        }
    },
    components: {
        notePrvMenu
    }
}



        