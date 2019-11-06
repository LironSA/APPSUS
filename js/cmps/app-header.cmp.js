import userMsg from './user-msg.cmp.js'


export default {
    template: `
    <header class="app-header flex space-between">
        <h1 class="header-logo"> APPSUS </h1>
        <nav class="nav-header flex space-around">
            <router-link to="/home">Home Page</router-link> 
            <!-- <router-link>Email</router-link> -->
            <!-- <router-link>Notes</router-link>/ -->
            <router-link to="/about">About</router-link>
        </nav>
    </header>
    
    `,
    components: {
        userMsg
    }
}