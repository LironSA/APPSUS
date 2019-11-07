'use strict'

import notePrvMenu from  './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
    <section class="txt-note-prv-container" v-if="note" :style="elementStyle">
        <p>{{note.content}}</p>
        <note-prv-menu :note='note'> </note-prv-menu> 
    </section>
     `,
    components: {
        notePrvMenu
    },
    computed: {
        elementStyle() {
            let style = '';
            for (let key in (this.note.style)) {
               
                 style+= `${key}:${this.note.style[key]};`
                 console.log("computed style:", style)
            }
            
            return style
        }

    }
}
//  style: { color: '#fff', 'background-color': '#22546', 'font-size': '10px' }, 
