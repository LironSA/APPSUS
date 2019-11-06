'use strict';

export default {
    template: `
                <section class="email-menu">
                    <nav class="flex col ">
                        <router-link class="email-menu-link compose" to="/email/compose">Compose</router-link>
                        <router-link class="email-menu-link" to="/email/list/Inbox">inbox</router-link>
                        <router-link class="email-menu-link" to="/email/list/Starred">starred</router-link>
                        <router-link class="email-menu-link" to="/email/list/Sent">Sent mails</router-link>
                        <router-link class="email-menu-link" to="/email/list/Draft">Drafts</router-link>
                    </nav>
                </section>
    `,
}