
import {eventBus} from '../services/event-bus.service.js'

export default {
    template: `
        <section class="user-msg flex align-center " v-if="msg" :class="msg.type">
        <p>{{msg.txt}}</p>
            <button @click="close">x</button>
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
