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
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'richard, Tabbert ', addr: 'richardtabbert31@gmail.com' }, subject: 'Hit the road Jack', body: 'I have building a variety of applicationa lately. Most do not have an API prepared for me to build the UI, at least initially. Fakerjs has been a valuable part of my development workflow, allowing me to focus on the front-end application.', isStarred: false, isDraft: true, isSent: true, isRead: false, sentAt: 1554580930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Paity, Tzurick', addr: 'paitynzurick90@gmail.com' }, subject: 'My plans for the summer', body: 'Staying at home its too hot outside', isStarred: false, isSent: false, isRead: false, sentAt: 155111111594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Miranda, Turner', addr: 'mirandaturner72@gmail.com' }, subject: 'Sprint progress status ', body: 'I have a pair of follow up articles in the works to demonstrate how to utilize fakerjs in the Fast Furniture demonstration app. There you will see how to form real, fake, objects that can be used to drive your front-end. Albeit in a test or development environment.', isStarred: true, isSent: false, isRead: false, sentAt: 151569930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Scott, Egley', addr: 'scottnegley100@gmail.com' }, subject: 'God damn', body: 'But mostly I enjoy Fakerjs because it frees me from worrying about the state of the back-end. As long as you know the applications data model you can create a script to reliably generate the data you need to make the front-end.', isStarred: false, isSent: false, isRead: false, sentAt: 1551133458594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Avery, Yniguez', addr: 'averyyniguez32@gmail.com' }, subject: 'Blabla', body: 'If you are not familiar with Lorem Ipsum it is how we have filled text for design purposes for years. There are many popular variations of Ipsum available, my favorite is bacon ipsum!', isStarred: false, isSent: false, isRead: true, sentAt: 155715930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'William, Jackson ', addr: 'williamjackson10@gmail.com' }, subject: 'Haha', body: 'hhhhhh', isStarred: false, isSent: false, isRead: true, sentAt: 155113393999 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Aubrey, Tevlin', addr: 'aubreytevlin71@gmail.com' }, subject: 'Gotem', body: 'Of course I could use the built in JavaScript Math.random method, but it only generates a random value between 0 and 1. The faker random number method allows you to control the min and max range', isStarred: false, isRead: false, isSent: false, sentAt: 1361133930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Tyrese, Thompson', addr: 'tyresethompson23@gmail.com' }, subject: 'Lorem', body: 'common way to generate a truly random value and faker has a random UUID generator.', isStarred: false, isRead: false, isDraft: true, isSent: false, sentAt: 1231133930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Mark, Wafford ', addr: 'markwafford89@gmail.com ' }, subject: 'Lorem', body: 'Now that our fake person has a name, a job and even an email address you can generate a fake address. Addresses come in many forms, which is why the faker.address module includes many methods to create a custom combination of values', isStarred: false, isRead: false, isSent: false, sentAt: 1551542930594 },
    { id: makeId(), sentTo: { to: [], cc: [], bcc: [] }, receivedFrom: { name: 'Kevin, Jones', addr: 'kevinjones43@gmail.com' }, subject: 'Lorem', body: 'Pretty nice it can generate random fake email address values. But when you are creating a fake person you probably want to sync the email address with the name you generated in the previous section', isStarred: false, isRead: false, isSent: false, sentAt: 1559876930594 },
]

getEmails();
