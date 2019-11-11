'use strict';
import txtNotePrv from '../cmps/txt-note-prv.cmp.js'
import todoNotePrv from '../cmps/todo-note-prv.cmp.js'
import imgNotePrv from '../cmps/img-note-prv.cmp.js'
import vidNotePrv from '../cmps/vid-note-prv.cmp.js'

export default {
  props: ['notes','title'],
  template: `
  <div class="note-list-container">
  <p v-if="title">{{title}}</p>
     <ul class="clean-list flex wrap justify-center">
          <component class="dyn-cmp" v-for="note in notes" :key="note.id" :is='note.type' :note="note" >
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