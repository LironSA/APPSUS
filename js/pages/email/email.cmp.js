'use strict';
import emailMenu from './cmps/email-menu.cmp.js'
import { emailService } from './cmps/email-service.js';
import { eventBus } from "../../services/event-bus.service.js";



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
    methods: {
        removeEmail(id) {
            emailService.removeEmail(id)
                .then((msg) => {
                    eventBus.$emit('show-msg', msg)
                })
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                this.emails = emails
            })
        eventBus.$on('removeEmail', (id) => {
            this.removeEmail(id)
        })
        eventBus.$on('filterChange', (newSettings) => {
            this.filterBy[newSettings.key] = newSettings.val
        })
        eventBus.$on('setEmailProperty', (newSettings) => {
            emailService.setEmailProperty(newSettings)
        })
        eventBus.$on('draftEmail', (email) => {
            emailService.draftEmail(email)
                .then((msg) => {
                    eventBus.$emit('show-msg', msg)
                })
        })
        eventBus.$on('sendEmail', (email) => {
            emailService.sendEmail(email)
                .then((msg) => {
                    eventBus.$emit('show-msg', msg)
                })
        })
    },

    computed: {
        filteredEmails() {
            if (!this.filterBy.type && !this.filterBy.selectVal && !this.filterBy.txtSearch) {
                return this.emails.filter(email => {
                    return email.isSent === false
                })
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
                            return email.isRead === true
                        })
                    } else {
                        filteredEmails = filteredEmails.filter(email => {
                            return email.isRead === false
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
