'use strict';
import emailMenu from './cmps/email-menu.cmp.js'
import { emailService } from './cmps/email-service.js';


export default {
    template: `
    <section class="email flex">
       <email-menu></email-menu>
       <router-view :emails="filteredEmails"></router-view>
    </section>
                `,
    components: {
        emailMenu
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                console.log(emails);
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