'use strict';
import emailMenu from './cmps/email-menu.cmp.js'


export default {
    template: `
    <section class="email flex">
       <email-menu></email-menu>
       <router-view></router-view>
    </section>
                `,
    components:{
        emailMenu
    }
}