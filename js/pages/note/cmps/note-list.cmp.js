'use strict';
import txtNotePrv from '../cmps/txt-note-prv.cmp.js'
import todoNotePrv from '../cmps/todo-note-prv.cmp.js'
import imgNotePrv from '../cmps/img-note-prv.cmp.js'
import vidNotePrv from '../cmps/vid-note-prv.cmp.js'

export default {
  props: ['notes','title'],
  template: `
  <div class="note-list-container">
  <h4 v-if="title">{{title}}</h4>
     <ul class="clean-list flex wrap">
          <component v-for="note in notes" :key="note.id" :is='note.type' :note="note" style="position:relative; padding:5px; border-radius: 5px; border:0.5px solid gray; margin:1.5%; solid gray; width:30%;" >
          </component>       
     </ul>
     </div>
    `,
  components: {
    txtNotePrv,
    todoNotePrv,
    imgNotePrv,
    vidNotePrv
  }
}