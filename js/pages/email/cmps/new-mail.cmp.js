'use strict';

import { eventBus } from "../../../services/event-bus.service.js";
import router from '../../../routes.js'
export default {
    template: `
                <section class="new-email">
                    <h1 class="new-email-header">New Message</h1>
                    <h2>To: <input type="email" class="send-to" placeholder="Email Address" v-model="emailData.sentTo"/></h2>
                    <h2>Cc: <input type="email" class="send-to" placeholder="Email Address" v-model="emailData.sentToCc"/></h2>
                    <h2>Bcc: <input type="email" class="send-to" placeholder="Email Address" v-model="emailData.sentToBcc"/></h2>
                    <h2>Subject: <input type="text" class="send-to" v-model="emailData.subject"/></h2>
                    <textarea v-model="emailData.body"></textarea>

                    <section>
                        <button @click="sendEmail">Send</button>
                        <button @click="draftEmail">Draft</button>

                    </section>            
                </section>            
    `,
    data() {
        return {
            emailData: {
                sentTo: '',
                sentToCc: '',
                sentToBcc: '',
                subject: '',
                body: '',
            }
        }
    },
    created() {
        eventBus.$on('editDraft', email => {
            this.emailData.sentTo = (email.sentTo.to.length !== 0) ? email.sentTo.to.map(str => { return str }) : ''
            this.emailData.sentToCc = (email.sentTo.cc.length !== 0) ? email.sentTo.cc.map(str => { return str }) : ''
            this.emailData.sentToBcc = (email.sentTo.bcc.length !== 0) ? email.sentTo.bcc.map(str => { return str }) : ''
            this.emailData.subject = email.subject
            this.emailData.body = email.body

        })

    },
    methods: {
        draftEmail() {
            router.push('/email/list/Inbox')
            eventBus.$emit('draftEmail', this.emailData)
        },
        sendEmail() {
            eventBus.$emit('sendEmail', this.emailData)
            router.push('/email/list/Inbox')
        }
    }
}