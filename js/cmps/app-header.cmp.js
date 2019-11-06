import userMsg from './user-msg.cmp.js'



export default {
    template: `
    <header class="app-header flex space-between">
        <h1 class="header-logo"> APPSUS </h1>
        <button @click="toggleMenu">#</button>
        <nav class="nav-header flex wrap" v-if="isOpenMenu">
            <router-link to="/email"><img src="img/email-origin.JPG" alt=""> </router-link> 
            <router-link to="/notes"><img src="img/notes_origin.JPG" alt=""> </router-link> 
            <router-link to="/maps"><img src="img/maps.JPG" alt=""> </router-link> 
            <router-link to="/calander"><img src="img/calander.JPG" alt=""> </router-link> 
            <router-link to="/youtube"><img src="img/youtube.JPG" alt=""> </router-link> 
            <router-link to="/contacts"><img src="img/contacts.JPG" alt=""> </router-link> 
            <router-link to="/photos"><img src="img/photos.JPG" alt=""> </router-link> 
            <router-link to="/earth"><img src="img/earth.JPG" alt=""> </router-link> 
            <router-link to="/news"><img src="img/news.JPG" alt=""> </router-link> 
            <router-link to="/about">About</router-link>
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
        userMsg
    }
}