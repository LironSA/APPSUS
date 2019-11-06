'use strict';
import emailMenu from './cmps/email-menu.cmp.js'
import { emailService } from './cmps/email-service.js';


export default {
    template: `
    <section class="email flex">
       <email-menu></email-menu>
       <router-view v-if="emails" :emails="emails"></router-view>
    </section>
                `,
    components: {
        emailMenu
    },
    data() {
        return {
            emails: [],
            filterBy: {
                type: '',
                selectVal: '',
                txtSearch: ''
            }
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                console.log(emails);
                this.emails = emails
            })
    },
    methods: {
        filterEmails() {
            let filteredEmails;
            this.emails.forEach(email => {
                if (email.type) filteredEmails.push
            })

        }
    },
    computed: {
        filteredEmails() {
            if (filterBy.type === 'starred') {

                return
            }
            // if (filterBy.type === 'starred')
            //     if (filterBy.type === 'starred')
            //         if (filterBy.type === 'starred')
        }
    },
    watch: {
        '$route.params.type'() {
            console.log('gotem', this.$route.params.type);
        }
    }

}