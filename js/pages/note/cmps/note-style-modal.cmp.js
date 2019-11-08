'use strict';



export default {
    props:['noteId'],
    template: `
            <section class="note-bgc-chang">
                <select @change="onBgcChange">
                    <option value="white">white</option>
                    <option value="pink">pink</option>
                    <option value="orange">orange</option>
                    <option value="purple">purple</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
            </section>
    `,
    
    methods: {
        toggleStyleModal() {
            this.isModalActive = !this.isModalActive
        },
        onBgcChange(ev) {
            let color = ev.target.value
            console.log('color: ', color)
            eventBus.$emit('bgcChange', 
                { prop:"backgroundColor", 
                id: this.noteId, val: color})
        }
    }
}

