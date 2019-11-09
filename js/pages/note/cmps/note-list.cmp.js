'use strict';
import txtNotePrv from '../cmps/txt-note-prv.cmp.js'
import todoNotePrv from '../cmps/todo-note-prv.cmp.js'
import imgNotePrv from '../cmps/img-note-prv.cmp.js'
import vidNotePrv from '../cmps/vid-note-prv.cmp.js'

export default {
  props: ['notes'],
  template: `
     <ul class="note-list-container clean-list flex wrap">
          <component v-for="note in notes" :key="note.id" :is='note.type' :note="note" style="position:relative; border:0.3px solid gray; width:30%;" >
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