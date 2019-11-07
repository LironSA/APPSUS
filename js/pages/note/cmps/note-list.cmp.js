'use strict';
import txtNotePrv from '../cmps/txt-note-prv.cmp.js'
import todoNotePrv from '../cmps/todo-note-prv.cmp.js'
export default {
    props: ['notes'],
    template: `
     <ul class="note-list-container clean-list" style ="border: 1px solid black; display:flex; flex-wrap:wrap;">
                 
          <component v-for="note in notes" :key="note.id" :is='note.type' :note="note" style ="width:33.33%;border: 1px solid black;" ></component>
                   
     </ul>
    `,
    components: {
        txtNotePrv,
        todoNotePrv
    }
}
//style ="border: 1px solid black; display:flex; flex-wrap:wrap;"
// style ="width:33.33%" 