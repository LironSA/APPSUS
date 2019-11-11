import userMsg from './user-msg.cmp.js'
import emailFilter from '../pages/email/cmps/email-filter.cmp.js'


export default {
    template: `
    <header class="app-header flex">
        <h1 class="header-logo"> ✨ Apps Place </h1>
        <email-filter v-if="searchToShow==='email'" ></email-filter>
        <button class="toggle-menu-btn" @click="toggleMenu">
            <img src="img/menu2.png" alt=""></button>
            <user-msg></user-msg>

        <nav class="nav-header flex wrap" v-if="isOpenMenu">
            <router-link to="/email/list/inbox"><img  @click.stop="toggleMenu">Email</router-link> 
            <router-link to="/note"><img @click.stop="toggleMenu"alt="">Notes</router-link> 
            <router-link to="/home"><img @click.stop="toggleMenu"alt="">Home</router-link> 
        </nav>
    </header>
    
    
    `,
    data() {
        return {
            isOpenMenu: true,
            searchToShow: ''
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
    },
    watch: {
        '$route'() {
            this.searchToShow = ''
            if (this.$route.path.startsWith('/email/list')) {
                this.searchToShow = 'email'
            }
            if (this.$route.path.startsWith('/note')) {
                this.searchToShow = 'note'
            }
        }
    }
}