'use strict';

import router from './routes.js'
import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'

let app = {
    router,
    el: '.my-app',
    template:
        `   <div class="main-container">
                <app-header></app-header>
                <router-view style="height: 80%; overflow: scroll;"></router-view>
                <app-footer></app-footer>
            </div>
        `
    ,
    components: {
        appHeader,
        appFooter
    }
}

new Vue(app);
