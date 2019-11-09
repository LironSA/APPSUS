'use strict';
import txtNotePrv from '../cmps/txt-note-prv.cmp.js'
import todoNotePrv from '../cmps/todo-note-prv.cmp.js'
import imgNotePrv from '../cmps/img-note-prv.cmp.js'
import vidNotePrv from '../cmps/vid-note-prv.cmp.js'

export default {
    props: ['notes'],
    template: `
     <ul class="note-list-container clean-list" style ="border: 1px solid black; column-count: 3;
     column-gap: 3%;
     column-width: 30%;">
          <component v-for="note in notes" :key="note.id" :is='note.type' :note="note" 
            style ="width:100% -webkit-column-break-inside: avoid;
            page-break-inside: avoid; position: relative;
            break-inside: avoid;border: 1px solid gray;" >
          </component>
                   
     </ul>
    `,
    components: {
        txtNotePrv,
        todoNotePrv,
        imgNotePrv,
        vidNotePrv
    }
}