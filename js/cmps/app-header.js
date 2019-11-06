import userMsg from './cmps/user-msg.cmp.js'


export default {
    template: `
    <header class="app-header">
        <h1> im the header </h1>
        <nav>
            <router-link>Home Page</router-link>
            <router-link>Email</router-link>
            <router-link>Notes</router-link>
        </nav>
    </header>
    
    `,
    components: {
        userMsg
    }
}