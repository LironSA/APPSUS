'use strict';

import notePrvMenu from './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
        <section  @mouseover="hover = true" @mouseleave="hover = false" v-if="note" class="img-note-prv flex align-center justify-center">
        <div class="iframe-container">
        <iframe :src="note.content"/>
            <note-prv-menu v-if="hover":note="note"></note-prv-menu>
            </div>
        </section>
    `   ,
    data(){
        return{
            hover:false
        }
    },
    components:{
        notePrvMenu
    }

}
