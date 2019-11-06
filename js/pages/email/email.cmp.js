'use strict';
import emailMenu from './cmps/email-menu.cmp.js'
import { emailService } from './cmps/email-service.js';


export default {
    template: `
    <section class="email flex">
       <email-menu></email-menu>
       <router-view :emails="currProp"></router-view>
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
        currProp() {
            if (this.$route.name === 'a') { return { foo: this.foo } }
            if (this.$route.name === 'b') { return { bar: this.bar } }

        }
    },
    watch:{
        '$route.params.type'(){
            console.log('gotem',$route.params.type);
        } 
    }

}