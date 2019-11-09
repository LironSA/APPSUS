'use strict';



export default {
    props:['noteId'],
    template: `
            <section class="note-bgc-chang flex">
                <select @change="onBgcChange">
                    <option value="white" style="color: white">⬤</option>
                    <option value="pink" style="color: pink">⬤</option>
                    <option value="orange" style="color: orange">⬤</option>
                    <option value="purple" style="color: purple">⬤</option>
                    <option value="blue" style="color: blue">⬤</option>
                    <option value="green" style="color: green">⬤</option>
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

