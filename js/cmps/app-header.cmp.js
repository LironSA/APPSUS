import userMsg from './user-msg.cmp.js'
import emailFilter from '../pages/email/cmps/email-filter.cmp.js'


export default {
    template: `
    <header class="app-header flex space-between">
        <h1 class="header-logo"> ✨ Apps Place </h1>
        <email-filter></email-filter>
        <button style="background: none; border: none" class="toggle-menu" @click="toggleMenu">
            <img src="img/menu.JPG" alt=""></button>
            <user-msg></user-msg>

        <!-- <router-link to="/about">About</router-link> -->
        <nav class="nav-header flex wrap" v-if="isOpenMenu">
            <router-link to="/email/list/inbox"><img src="img/email-origin.JPG" alt=""></router-link> 
            <router-link to="/note"><img src="img/notes_origin.JPG" alt=""> </router-link> 
            <router-link to="/coming-soon"><img src="img/maps.JPG" alt=""> </router-link> 
            <router-link to="/coming-soon"><img src="img/calander.JPG" alt=""> </router-link> 
            <router-link to="/coming-soon"><img src="img/youtube.JPG" alt=""> </router-link> 
            <router-link to="/coming-soon"><img src="img/contacts.JPG" alt=""> </router-link> 
            <router-link to="/coming-soon"><img src="img/photos.JPG" alt=""> </router-link> 
            <router-link to="/coming-soon"><img src="img/earth.JPG" alt=""> </router-link> 
            <router-link to="/coming-soon"><img src="img/news.JPG" alt=""> </router-link> 
        </nav>
    </header>
    
    
    `,
    data() {
        return {
            isOpenMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpenMenu = !this.isOpenMenu
        }
    },
    components: {
        userMsg,
        emailFilter
    }
}