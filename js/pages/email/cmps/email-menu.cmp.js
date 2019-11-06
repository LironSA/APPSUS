'use strict';

export default {
    template: `
                <section class="email-menu flex col">
                    <nav>
                        <router-link class="email-menu-link" to="/email/compose">Compose</router-link>
                        <router-link class="email-menu-link" to="">inbox</router-link>
                        <router-link class="email-menu-link" to="">starred</router-link>
                        <router-link class="email-menu-link" to="">Sent mails</router-link>
                        <router-link class="email-menu-link" to="">Drafts</router-link>
                    </nav>
                </section>
    `
}