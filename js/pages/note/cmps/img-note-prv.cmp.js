'use strict';
import notePrvMenu from './note-prv-menu.cmp.js';
export default {
    props: ['note'],
    template: `
        <li v-if="note" class="img-note-prv flex col"  @mouseover="hover = true" @mouseleave="hover=false" :style="bgColor">
                <div class="img-container flex justify-center">
                    <img :src="note.content"></img>
                </div>
            <note-prv-menu v-if="hover" :note="note"></note-prv-menu>
        </li>
    `   ,
    data() {
        return {
            hover: false
        }
    },
    components: {
        notePrvMenu
    },
    computed: {
        bgColor() {
            return { 'backgroundColor': this.note.backgroundColor }
        }
    },
}

//