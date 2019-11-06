import homePageCmp from './pages.home.cmp.js'

let myRoutes = [
    {
        path: '/home',
        component: homePageCmp
    },

]
const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter
