'use strict';
import emailMenu from './cmps/email-menu.cmp.js'
import { emailService } from './cmps/email-service.js';


export default {
    template: `
    <section class="email flex">
       <email-menu></email-menu>
       <router-view :emails="emails"></router-view>
    </section>
                `,
    components: {
        emailMenu
    },
    data(){
        return{
            emails:[]
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                console.log(emails);
                this.emails=emails
            })
    },
    computed: {
        filteredEmails() {
            if (this.$route.name === 'a') { return { foo: this.foo } }
            if (this.$route.name === 'b') { return { bar: this.bar } }

        }
    },
    watch:{
        '$route.params.type'(){
            console.log('gotem',this.$route.params.type);
        } 
    }

}