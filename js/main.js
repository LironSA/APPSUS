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
                <transition name="main-router-trans" enter-active-class="animated fadeInLeftBig" leave-active-class="animated fadeOutRightBig">
                <router-view style="height: 80%; width:100% overflow:hidden;"></router-view>
                </transition>
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
