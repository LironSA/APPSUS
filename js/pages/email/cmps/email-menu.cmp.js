'use strict';

export default {
    template: `
                <section class="email-menu">
                    <nav class="flex col">
                        <router-link class="email-menu-link" to="/email/compose">Compose</router-link>
                        <router-link class="email-menu-link" to="/email/list/inbox">inbox</router-link>
                        <router-link class="email-menu-link" to="/email/list/starred">starred</router-link>
                        <router-link class="email-menu-link" to="/email/list/sent">Sent mails</router-link>
                        <router-link class="email-menu-link" to="/email/list/drafts">Drafts</router-link>
                    </nav>
                </section>
    `,
}