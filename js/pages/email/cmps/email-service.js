'use strict';
import { storageService } from '../../../services/util-service.js'
import{makeId}  from '../../../services/util-service.js'
export const emailService = {
    getEmails
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

const DEFUALT_EMAILS = [
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'a', addr: 'a@gmail.com' }, subject: 'Wassap with Vue?', body: 'May I', isRead: false, sentAt: 1554580930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'b', addr: 'b@gmail.com' }, subject: 'My plans for the summer', body: 'Staying at home its too hot outside', isRead: false, sentAt: 155111111594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'c', addr: 'c@gmail.com' }, subject: 'Sprint progress status ', body: 'just faking data', isRead: false, sentAt: 151569930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'd', addr: 'd@gmail.com' }, subject: 'God damn', body: 'This is hard', isRead: false, sentAt: 1551133458594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'e', addr: 'e@gmail.com' }, subject: 'Blabla', body: 'Blyat', isRead: false, sentAt: 155715930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'f', addr: 'f@gmail.com' }, subject: 'Haha', body: 'hhhhhh', isRead: false, sentAt: 155113393999 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'g', addr: 'g@gmail.com' }, subject: 'Gotem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1361133930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'h', addr: 'h@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1231133930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'i', addr: 'i@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1551542930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'j', addr: 'j@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1559876930594 },
]