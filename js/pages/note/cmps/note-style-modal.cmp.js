'use strict';


export default {
    props: ['noteId'],
    template: `
            <section class="note-bgc-change">
                    <div @click="onBgcChange" style="background-color:#fff" ref="white" id="white"></div>
                    <div @click="onBgcChange" style="background-color:rgb(255, 148, 255)"  ref="pink" id="pink"></div>
                    <div @click="onBgcChange" style="background-color:rgb(255, 171, 75) " ref="orange" id="orange"></div>
                    <div @click="onBgcChange" style="background-color: rgb(173, 92, 173)" ref="purple" id ="purple"></div>
                    <div @click="onBgcChange" style="background-color:rgb(32, 110, 255);" ref="blue" id ="blue"></div>
                    <div @click="onBgcChange" style="background-color:rgb(43, 255, 106)" ref="green"id ="green"></div>
            </section>
    `,
    data() {
        return {
            selectedColor: 'white'
        }
    },
    methods: {
        onBgcChange(ev) {
            console.log(ev.target.style.backgroundColor);
            this.$refs[this.selectedColor].classList.remove('selected')
            let color = ev.target.style.backgroundColor
            this.selectedColor = ev.target.id
            ev.target.classList.add('selected')
            eventBus.$emit('bgcChange',
                {
                    prop: "backgroundColor",
                    id: this.noteId, val: color
                })
        }
    }
}

