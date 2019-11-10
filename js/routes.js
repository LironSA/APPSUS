import emailCmp from './pages/email/email.cmp.js'
import newMailCmp from './pages/email/cmps/new-mail.cmp.js'
import emailList from './pages/email/cmps/email-list.cmp.js'
import commingSoon from './pages/comming-soon.cmp.js'
import emailDisplay from './pages/email/cmps/email-display.cmp.js'

import noteCmp from './pages/note/note.cmp.js'

let myRoutes = [
    {
        path: '/email',
        component: emailCmp,
        children: [
            {
                path: 'compose/:id?',
                component: newMailCmp
            },
            {
                path: 'list/:type',
                component: emailList
            },
            {
                path: 'emailDisplay/:emailId',
                component: emailDisplay
            }
        ]
    },
    {
        path: '/coming-soon',
        component: commingSoon
    },
    {
        path: '/note',
        component: noteCmp
    },

]
const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter
