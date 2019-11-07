import emailCmp from './pages/email/email.cmp.js'
import newMailCmp from './pages/email/cmps/new-mail.cmp.js'
import emailList from './pages/email/cmps/email-list.cmp.js'
import commingSoon from './pages/comming-soon.cmp.js'

import keepCmp from './pages/keep/keep.cmp.js'

let myRoutes = [
    {
        path: '/email',
        component: emailCmp,
        children: [
            {
                path: 'compose',
                component: newMailCmp
            },
            {
                path: 'list/:type',
                component: emailList
            },
            {
                path: 'list/:details',
                component: emailList
            }
        ]
    },
    {
        path: '/coming-soon',
        component: commingSoon
    },
    {
        path: '/keep',
        component: keepCmp,
    },

]
const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter
