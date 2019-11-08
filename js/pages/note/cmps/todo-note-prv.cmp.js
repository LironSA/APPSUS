'use strict';
export default {
    props: ['note'],
    template: `
        <ul v-if="todos" class="todo-not-prv" >
            <li v-for="(todo,idx) in todos" :key="idx" :class="{'line-through':todo.isDone}" @click="toggleIsDone(todo)">{{todo.txt}}</li>
        </ul>
     `,
    data() {
        return {
            todos: []
        }
    },
    created() {
        this.todos = this.note.content.split(',')
        this.todos = this.todos.map(txt => {
            return { isDone: false, txt }
        })
    },
    methods: {
        toggleIsDone(todo) {
            todo.isDone = !todo.isDone
        }

    }


}

