'use strict';


export default {
    props: ['noteId'],
    template: `
            <section class="note-bgc-change">
                    <div @click="onBgcChange" style="background-color:#fff" ref="white" id="white"></div>
                    <div @click="onBgcChange" style="background-color:rgb(238, 37, 238)"  ref="pink" id="pink"></div>
                    <div @click="onBgcChange" style="background-color:rgb(250, 167, 12) " ref="orange" id="orange"></div>
                    <div @click="onBgcChange" style="background-color: rgb(250, 250, 7)" ref="purple" id ="purple"></div>
                    <div @click="onBgcChange" style="background-color:rgb(32, 110, 255);" ref="blue" id ="blue"></div>
                    <div @click="onBgcChange" style="background-color:rgb(53, 218, 247)" ref="green"id ="green"></div>
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

