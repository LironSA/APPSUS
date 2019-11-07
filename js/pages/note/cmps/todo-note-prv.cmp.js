'use strict';
export default {
    props: ['note'],
    template: `
        <ul v-if="todos" class="todo-not-prv" >
            <li v-for="(todo,idx) in todos" :key="idx">{{todo}}</li>
        </ul>
     `,
    data() {
        return {
            todos: []
        }
    },
    created() {
        this.todos = this.note.split(',')
    }

}