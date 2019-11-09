'use strict'

import {emailService} from './email-service.js';




export default {
    template: `
    <section class="displayed-email flex col page" v-if="email" @click="emailClicked(email.id)">
            <div class="displayed-subject">{{email.subject}}</div>
            <div class="displayed-sentAt">{{timeToShow}}</div>
            <div class="received-name" v-if="email.receivedFrom">{{email.receivedFrom.name}}</div>
            <div class="received-addr" v-if="email.receivedFrom">{{email.receivedFrom.addr}}</div>
            <div class="displayed-body">{{email.body}}</div>
            <button @click.stop="removeEmail(email.id)">Delete</button>
            <!-- <div v-if="email.isDraft" @click.stop="useDraft(email)">Add to new msg</div> -->
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
        console.log('$route.params: ', this.$route.params)
    },
    computed: {
        timeToShow() {
            var time = new Date(this.email.sentAt);
            var jsonDate = (time).toJSON().slice(0, 10);
            return jsonDate;
            // return jsonDate.splice(10, 1, "000");
        }
    },
}

