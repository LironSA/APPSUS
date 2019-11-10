import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
    
        <ul class="email-list clean-list page">
        <h1 class="sub-header" style="width: 80%; margin: 1.7%">{{title}}</h1>
            <email-preview v-for="email in emails" :key="email.id" :email="email">
            </email-preview>
        </ul>
    `,
    components: {
        emailPreview
    },
    computed: {
        title() {
            return this.$route.params.type
        }
    }
}

