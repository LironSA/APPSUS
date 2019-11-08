'use strict';


export default {
    props: ['note'],
    template: `
                <section class="note-list-container">
                    <input type="color" id="" @change="onBgcChange">
                    <!-- <button @click="pinNote">pin</button> -->
                </section>
    `,
    methods: {
        onBgcChange(ev) {
            let color = ev.target.value
            console.log('color: ', color)
            eventBus.$emit('bgcChange', 
                { prop:"style.background-color", 
                id: this.note.id, val: ev.target.value })
        },

    },

}

