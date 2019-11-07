'use strict';
import emailMenu from './cmps/email-menu.cmp.js'
import { emailService } from './cmps/email-service.js';


export default {
    template: `
    <section class="email flex">
       <email-menu></email-menu>
       <router-view v-if="emails" :emails="filteredEmails"></router-view>
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
                this.emails = emails
            })
    },

    computed: {
        filteredEmails() {
            if (!this.filterBy.type && !this.filterBy.selectVal && !this.filterBy.txtSearch) {
                return this.emails
            } else {
                let filteredEmails = this.emails
                if (this.filterBy.type) {
                    filteredEmails = filteredEmails.filter(email => {
                        let filter = 'is' + this.filterBy.type
                        return email[filter] === true
                    })
                }
                if (this.filterBy.selectVal) {
                    if (this.filterBy.selectVal === 'isRead') {
                        filteredEmails = filteredEmails.filter(email => {
                            return email.isRead===true
                        })
                    } else {
                        filteredEmails = filteredEmails.filter(email => {
                            return email.isRead===false
                        })
                    }
                }
                if (this.filterBy.txtSearch) {
                    let regex = new RegExp(`${this.filterBy.txtSearch}`, 'i');
                    filteredEmails = filteredEmails.filter(email => {
                        return regex.test(email.body)
                    })
                }
                return filteredEmails
            }
        }
    },
    watch: {
        '$route.params.type'() {
            let emailType = this.$route.params.type
            if (emailType === 'Inbox') {
                this.filterBy.type = ''
            } else {
                this.filterBy.type = emailType
            }
        }
    }

}