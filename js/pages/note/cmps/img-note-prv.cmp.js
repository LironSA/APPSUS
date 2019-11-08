'use strict';
import notePrvMenu from './note-prv-menu.cmp.js';
export default {
    props: ['note'],
    template: `
        <section v-if="note" class="img-note-prv flex align-center justify-center">
            <img :src="note.content" style="width:90%;"/>
            <note-prv-menu :note="note"></note-prv-menu>
        </section>
    `   ,
    components:{
        notePrvMenu
    }
}