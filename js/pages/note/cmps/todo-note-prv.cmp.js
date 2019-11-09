'use strict';

import notePrvMenu from './note-prv-menu.cmp.js';


export default {
    props: ['note'],
    template: `
        <section @mouseover="hover = true" @mouseleave="hover=false" class="todo-not-prv  flex align-center justify-center" :style="bgColor">
                <ul v-if="todos.length>0"  >
                    <li v-for="(todo,idx) in todos" :key="idx" :class="{'line-through':todo.isDone}" @click="toggleIsDone(todo)">{{todo.txt}}</li>
                </ul>
            <note-prv-menu v-if="hover" :note='note'></note-prv-menu>
        </section>
     `,
    data() {
        return {
            todos: [],
            hover:false
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
    computed: {
        bgColor() {
            return { 'backgroundColor': this.note.backgroundColor }
        }
    },
    components: {
        notePrvMenu
    }
}

