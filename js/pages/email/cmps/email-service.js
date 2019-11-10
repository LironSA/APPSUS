'use strict';
import { storageService } from '../../../services/util-service.js'
import { makeId } from '../../../services/util-service.js'
import emailCmp from '../email.cmp.js';

export const emailService = {
    getEmails,
    removeEmail,
    setEmailProperty,
    draftEmail,
    sendEmail,
    getEmailById,
    getDeletedEmails
}
const EMAILS_KEY = 'emails'
const DELETED_KEY = 'deleted'

let gEmails;
let gDeletedEmails;

function getEmails() {
    let emails = storageService.load(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = DEFUALT_EMAILS
        storageService.store(EMAILS_KEY, emails)
        gEmails = emails;
    } else {
        gEmails = emails;
    }
    return Promise.resolve(gEmails)
}

function getDeletedEmails() {
    let emails = storageService.load(DELETED_KEY)
    if (!emails) {
        emails = []
        storageService.store(DELETED_KEY, emails)
        gDeletedEmails = emails;
    } else {
        gDeletedEmails = emails;
    }
    return Promise.resolve(gDeletedEmails)
}
function sendEmail(email) {
    email.isSent = true
    email.sentAt = Date.now()
    email.id = makeId()
    gEmails.unshift(email)
    email.isStarred=false
    email.isRead=true
    storageService.store(EMAILS_KEY, gEmails)
    const msg = {
        txt: `Sent Succefully `,
        type: 'success'
    }
    return Promise.resolve(msg);
}
function draftEmail(email) {
    email.isDraft = true
    email.sentAt = Date.now()
    email.id = makeId()
    gEmails.unshift(email)
    storageService.store(EMAILS_KEY, gEmails)
    const msg = {
        txt: `added to drafts `,
        type: 'success'
    }
    return Promise.resolve(msg);
}
function removeEmail(id) {
    var idx = gEmails.findIndex(email => email.id === id);
    if (idx !== -1) {
        let mail = gEmails.splice(idx, 1)
        gDeletedEmails.unshift(mail[0])
        storageService.store(DELETED_KEY, gDeletedEmails)
    }
    storageService.store(EMAILS_KEY, gEmails)
    const msg = {
        txt: `Deleted!`,
        type: 'success'
    }
    return Promise.resolve(msg);
}
// {id, prop, val}
function setEmailProperty(data) {
    var idx = gEmails.findIndex(email => email.id === data.id);
    if (idx !== -1) {
        console.log("data:", data)
        gEmails[idx][data.prop] = data.val
        storageService.store(EMAILS_KEY, gEmails)
        // return Promise.resolve();
    }
}

function getEmailById(id) {
    var email = gEmails.find(email => email.id === id);
    return Promise.resolve(email);

}



const DEFUALT_EMAILS = [
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Jack', addr: 'Jack@gmail.com' }, subject: 'Hit the road Jack', body: 'May I', isStarred: false, isDraft: true, isSent: true, isRead: false, sentAt: 1554580930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Stan', addr: 'Stan@gmail.com' }, subject: 'My plans for the summer', body: 'Staying at home its too hot outside', isStarred: false, isSent: false, isRead: false, sentAt: 155111111594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Roy', addr: 'Roy@gmail.com' }, subject: 'Sprint progress status ', body: 'just faking data', isStarred: true, isSent: false, isRead: false, sentAt: 151569930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Gus', addr: 'Gus@gmail.com' }, subject: 'God damn', body: 'This is hard', isStarred: false, isSent: false, isRead: false, sentAt: 1551133458594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Lee', addr: 'Lee@gmail.com' }, subject: 'Blabla', body: 'Blyat', isStarred: false, isSent: false, isRead: true, sentAt: 155715930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'John Doe', addr: 'John@gmail.com' }, subject: 'Haha', body: 'hhhhhh', isStarred: false, isSent: false, isRead: true, sentAt: 155113393999 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Eleanor Rigby', addr: 'Eleanor@gmail.com' }, subject: 'Gotem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isStarred: false, isRead: false, isSent: false, sentAt: 1361133930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Roxann', addr: 'Roxann@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isStarred: false, isRead: false, isDraft: true, isSent: false, sentAt: 1231133930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'My Sharona', addr: 'Sharona@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isStarred: false, isRead: false, isSent: false, sentAt: 1551542930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Luka', addr: 'Luka@gmail.com' }, subject: 'Lorem', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, corporis!', isStarred: false, isRead: false, isSent: false, sentAt: 1559876930594 },
]

getEmails();
