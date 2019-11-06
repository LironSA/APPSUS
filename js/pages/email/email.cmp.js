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
            let emails = this.emails
            let type = this.filterBy.type
            let selcet = this.filterBy.selectVal
            let search = this.filterBy.txtSearch
            console.log('emails>', emails);
            console.log('type>', this.filterBy.type, 'WTF');
            console.log('selcet>', selcet);
            console.log('search>', search);
            if (!type && !selcet && !search) {
                return emails
            } else {


                let filteredEmails = emails
                if (type) {
                    filteredEmails = filteredEmails.filter(email => {
                        let filter = 'is' + type
                        return email.filter === true
                    })
                }
                if (select) {
                    if (selcet === 'isRead') {
                        filteredEmails = filteredEmails.filter(email => {
                            return email.isRead === true
                        })
                    } else {
                        filteredEmails = filteredEmails.filter(email => {
                            return email.isRead === false
                        })
                    }
                }
                if (search) {
                    let regex = new RegExp(`${search}`, 'i');
                    filteredEmails = filteredEmails.filter(book => regex.test(book.title))
                }
                return filteredEmails
            }
        }
    },
    watch: {
        '$route.params.type'() {
            let emailType = this.$route.params.type
            let filterByType = this.filterBy.type
            if (emailType === 'Inbox') {
                filterByType = ''
            } else {
                filterByType = emailType
            }
            console.log('filter type changed to', filterByType);
        }
    }

}