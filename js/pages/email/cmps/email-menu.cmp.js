'use strict';

export default {
    template: `
                <section class="email-menu">
                    <nav class="flex col ">
                        <router-link class="email-menu-link compose" to="/email/Compose">
                        <i class="fa fa-plus">\t Compose</i></router-link>
                        <router-link class="email-menu-link" to="/email/list/Inbox">
                        <i class="fa fa-inbox">\t Inbox</i></router-link> 
                        <router-link class="email-menu-link" to="/email/list/Starred">
                        <i class="fa fa-star">\t Starred</i></router-link>
                        <router-link class="email-menu-link" to="/email/list/Sent">
                        <i class="fa fa-paper-plane">\t Sent Email</i></router-link>
                        <router-link class="email-menu-link" to="/email/list/Draft">
                        <i class="fa fa-comment-alt-edit">\t Drafts</i></router-link>

                    </nav>
                </section>
    `,
}