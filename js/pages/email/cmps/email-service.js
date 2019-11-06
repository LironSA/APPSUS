'use strict';
import storageService from '../../../services/util-service.js'

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
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'Wassap with Vue?', body: 'May I', isRead: false, sentAt: 1554580930594 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'My plans for the summer', body: 'Staying at home its too hot outside', isRead: false, sentAt: 155111111594 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'Sprint progress status ', body: 'just faking data', isRead: false, sentAt: 151569930594 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'God damn', body: 'This is hard', isRead: false, sentAt: 1551133458594 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'Blabla', body: 'Blyat', isRead: false, sentAt: 155715930594 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'Haha', body: 'hhhhhh', isRead: false, sentAt: 155113393999 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'Gotem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1361133930594 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1231133930594 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1551542930594 },
    { sentTo: { to: [], cc: [], bcc: [] }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isRead: false, sentAt: 1559876930594 },
]