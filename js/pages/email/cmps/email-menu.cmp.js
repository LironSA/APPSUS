'use strict';

export default {
    template: `
                <section class="email-menu">
                    <nav class="flex col ">
                        <router-link class="email-menu-link compose" to="/email/compose">
                        <i class="fa fa-plus">\t Compose</i></router-link>
                        <router-link class="email-menu-link" to="/email/list/inbox">
                        <i class="fa fa-inbox">\t Inbox</i></router-link> 
                        <router-link class="email-menu-link" to="/email/list/starred">
                        <i class="fa fa-star">\t Starred</i></router-link>
                        <router-link class="email-menu-link" to="/email/list/sent">
                        <i class="fa fa-paper-plane">\t Sent Email</i></router-link>
                        <router-link class="email-menu-link" to="/email/list/drafts">
                        <i class="fa fa-comment-alt-edit">\t Starred</i></router-link>

                    </nav>
                </section>
    `,
}