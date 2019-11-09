import { eventBus } from "../../../services/event-bus.service.js";
import router from '../../../routes.js';



// TODO - limit the prev body with MORE

export default {
    props: ['email', 'selectVal'],
    template: `
    <section class="preview-container" v-if="email" @click="emailClicked(email.id)">
        <li class="prev-list flex">
            <!-- // ISREAD - to add method that recognizes the read/unread, -->
            <h4 class="prev-name"  v-if="email.receivedFrom" v-bind:class="{selectedEmail:email.isRead}"      
                >{{email.receivedFrom.name}}</h4>
            <h4 class="prev-subj">{{email.subject}} - 
                <a>{{email.body}}</a></h4> 
            <h4 class="prev-sent">{{timeToShow}}</h4>
        </li>

       
        
    </section>
    `,


    computed: {
        timeToShow() {
            var time = new Date(this.email.sentAt);
            var jsonDate = (time).toJSON().slice(0, 10);
            return jsonDate;
            // return jsonDate.splice(10, 1, "000");
        }
    },
    data() {
        return {
            isSelected: false
        }
    },
    methods: {
        emailClicked(id) {
            if (this.selectVal !== 'unRead') {
                this.setEmailProperty(id, 'isRead', true)
            }
            router.push(`/email/emailDisplay/${id}`)
        },
        removeEmail(id) {
            eventBus.$emit('removeEmail', id)
        },
        setEmailProperty(id, prop, val) {
            var data = { id, prop, val }
            eventBus.$emit('setEmailProperty', data)
        },
        useDraft(email) {
            router.push('/email/Compose')
            setTimeout(() => {
                eventBus.$emit('editDraft', email)
            }, 100)
        }
    },
}

