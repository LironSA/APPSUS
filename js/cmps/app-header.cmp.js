import userMsg from './user-msg.cmp.js'


export default {
    template: `
    <header class="app-header">
        <h1> im the header </h1>
        
        <nav>
            <router-link to="/home">Home Page</router-link>

        </nav>
    </header>
    
    `,
                // <router-link>Email</router-link>
            // <router-link>Notes</router-link>/
    components: {
        userMsg
    }
}