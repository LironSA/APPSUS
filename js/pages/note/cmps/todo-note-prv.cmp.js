'use strict';

import notePrvMenu from  './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
        <section class="todo-not-prv">
        <ul v-if="todos"  >
            <li v-for="(todo,idx) in todos" :key="idx" :class="{'line-through':todo.isDone}" @click="toggleIsDone(todo)">{{todo.txt}}</li>
        </ul>
        <note-prv-menu :note='note'> </note-prv-menu>
</section>
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

    },
    components: {
        notePrvMenu
    }
}

