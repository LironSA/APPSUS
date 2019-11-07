'use strict';
import { storageService } from '../../../services/util-service.js'
import{makeId}  from '../../../services/util-service.js'
export const emailService = {
    getEmails,
    removeEmail
}
const EMAILS_KEY = 'emails'
function getEmails() {
    let emails = storageService.load(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = DEFUALT_EMAILS
        storageService.store(EMAILS_KEY, emails)
    }
    return Promise.resolve(emails)
}



function removeEmail(id) {
    var idx = emails.findIndex(email =>email.id === id);
    if (idx !== -1)  emails.splice(idx, 1)
    storageService.store(EMAILS_KEY, emails)
    return Promise.resolve();
}




const DEFUALT_EMAILS = [
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Jack', addr: 'Jack@gmail.com' }, subject: 'Wassap with Vue?', body: 'May I',isDraft:true, isRead: false, sentAt: 1554580930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Stan', addr: 'Stan@gmail.com' }, subject: 'My plans for the summer', body: 'Staying at home its too hot outside', isRead: false, sentAt: 155111111594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Roy', addr: 'Roy@gmail.com' }, subject: 'Sprint progress status ', body: 'just faking data',isStarred:true, isRead: false, sentAt: 151569930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Gus', addr: 'Gus@gmail.com' }, subject: 'God damn', body: 'This is hard', isRead: false, sentAt: 1551133458594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Lee', addr: 'Lee@gmail.com' }, subject: 'Blabla', body: 'Blyat', isRead: false, sentAt: 155715930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'John Doe', addr: 'John@gmail.com' }, subject: 'Haha', body: 'hhhhhh', isRead: false, sentAt: 155113393999 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Eleanor Rigby', addr: 'Eleanor@gmail.com' }, subject: 'Gotem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false,isSent:true, sentAt: 1361133930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Roxann', addr: 'Roxann@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false,isDraft:true, sentAt: 1231133930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'My Sharona', addr: 'Sharona@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1551542930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Luka', addr: 'Luka@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1559876930594 },
]