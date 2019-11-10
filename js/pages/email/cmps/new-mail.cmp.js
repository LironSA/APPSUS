'use strict';

import { eventBus } from "../../../services/event-bus.service.js";
import router from '../../../routes.js'
export default {
    template: `
                <section class="new-email page">
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
    methods: {
        draftEmail() {
            router.push('/email/list/Inbox')
            eventBus.$emit('draftEmail', this.emailData)
        },
        sendEmail() {
            eventBus.$emit('sendEmail', this.emailData)
            router.push('/email/list/Inbox')
        }
    },
    watch:{
        '$route.params.id'(){
            console.log(this.$route.params.id);
            
        }
    }
}