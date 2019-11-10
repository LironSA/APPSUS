'use strict'

import {emailService} from './email-service.js';
import router from '../../../routes.js';



export default {
    template: `
    <section class="displayed-email flex col page" v-if="email">
            <div class="displayed-subject">{{email.subject}}</div>
            <div class="displayed-sentAt">{{timeToShow}}</div>
            <div class="received-name" v-if="email.receivedFrom">{{email.receivedFrom.name}}</div>
            <div class="received-addr" v-if="email.receivedFrom">{{email.receivedFrom.addr}}</div>
            <div class="displayed-body">{{email.body}}</div>
            <button @click.stop="removeEmail(email.id)">Delete</button>
            <button v-if="email.isDraft" @click.stop="useDraft(email)">Use as a new mail</button>
    </section>
    `,
    data() {
        return {
            email: null
        }
    },
    created() {
        let id = this.$route.params.emailId;
        emailService.getEmailById(id)
            .then (email => this.email = email)
    },
    methods:{
        removeEmail(id) {
            eventBus.$emit('removeEmail', id)
            router.push(`/email/list/Inbox`)
        },
        setEmailProperty(id, prop, val) {
            var data = { id, prop, val }
            eventBus.$emit('setEmailProperty', data)
        },
        useDraft(email) {
            router.push(`/email/compose/${email.id}`)
        }
    },
    computed: {
        timeToShow() {
            var time = new Date(this.email.sentAt);
            var jsonDate = (time).toJSON().slice(0, 10);
            return jsonDate;
            // var time = new Date(this.email.sentAt);
            // moment.locale(time)
            // return jsonDate.splice(10, 1, "000");
            // return time;
            // var jsonDate = (time).toJSON().slice(0, 10);
            // return jsonDate;
            // moment.defaultFormat(time);
            // return time

        }
    },
}

