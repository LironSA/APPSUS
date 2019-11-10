import { eventBus } from "../../../services/event-bus.service.js";
import router from '../../../routes.js';



// TODO - limit the prev body with MORE

export default {
    props: ['email',],
    template: `
        <li class="prev-list flex preview-container" v-if="email" @click="emailClicked(email.id)">
            <!-- // ISREAD - to add method that recognizes the read/unread, -->
            <h4 class="prev-name"  v-if="email.receivedFrom" v-bind:class="{selectedEmail:email.isRead}"      
                ><span :class="{starred: isStarred}" 
                @click.stop="setEmailProperty(email.id, 'isStarred', !email.isStarred)">☆</span> {{email.receivedFrom.name}}</h4>
            <h4 class="prev-subj" v-bind:class="{selectedEmail:email.isRead}">{{email.subject}} - 
                <a>{{email.body}}</a></h4>
            <!-- <h4 v-if="timeToShow" class="prev-sent">{{timeToShow}}</h4> -->
        </li>
    `,


    computed: {
        timeToShow() {
            var time = new Date(this.email.sentAt);
            var jsonDate = (time).toJSON().slice(0, 10);
            return jsonDate;
            // return jsonDate.splice(10, 1, "000");

            // moment().format('MMMM Do YYYY, h:mm:ss a')
            
            // $(".time").text(moment(time).format('h:mm:ss a'));
            // return time;

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
    computed: {
        isStarred () {
            return this.email.isStarred;
        }
    }
}

