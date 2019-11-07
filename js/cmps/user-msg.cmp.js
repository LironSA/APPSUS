
import {eventBus} from '../services/event-bus.service.js'

export default {
    template: `
        <section class="user-msg" v-if="msg" :class="msg.class">
            <button @click="close">x</button>
            <p>{{msg.txt}}</p>
            <!-- <router-link v-if="msg.path" to="msg.path"></router-link> -->
        </section>
    `,
    data() {
        return {
            msg: null
        }
    },
    created() {
        eventBus.$on('show-msg', (msg)=>{            
            this.msg = msg;
            setTimeout(()=>{
                this.msg = null;
            }, msg.delay||3000)
        })
    },
    methods: {
        close() {
            this.msg = null;
        }
    }
}
