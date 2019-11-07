'use strict'

import notePrvMenue from  './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
    <section class="txt-note-prv-container" v-if="note">
        <p>{{note.content}}</p>
    </section>
     `,
    components: {
        notePrvMenue
    } 
}

