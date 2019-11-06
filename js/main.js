'use strict';

import router from './routes.js'
import appHeader from './cmps/app-header.cmp.js'

let app = {
    router,
    el: '.my-app',
    template:
        `   <div>
                <user-msg></user-msg>
                <app-header></app-header>
                <router-view></router-view>
            </div>
        `
    ,
    components: {
        appHeader,
    }
}

new Vue(app);
