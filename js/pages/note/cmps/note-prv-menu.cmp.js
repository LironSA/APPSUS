'use strict';

export default {
    props: ['notes'],
    template: `
                <section class="note-list-container">
                    <input type="color" @change="bgcEditNote">
                    <button @click="pinNote">pin</button>
                </section>
    `,
    methods: {
        bgcEditNote(ev) {
            let color = ev.target.val
            console.log('color: ', color)
            eventBus.$emit('bgcChange', { key: ev.target.id, val: ev.target.value })

            // this.style.background-color
        }
        

    }

}

