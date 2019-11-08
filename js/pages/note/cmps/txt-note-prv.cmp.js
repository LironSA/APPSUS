'use strict'

import notePrvMenu from  './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
    <section class="txt-note-prv-container" v-if="note" :style="bgColor">
        <p>{{note}}
        <note-prv-menu :note='note'> </note-prv-menu> </p>
    </section>
     `,
    components: {
        notePrvMenu
    },
    computed: {
        bgColor() {
            return {'backgroundColor': this.note.backgroundColor}
        }
    }
}



        