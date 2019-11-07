import emailPreview from  './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
    
        <ul class="email-list clean-list">
            <email-preview v-for="email in emails" :key="email.id" :email="email">
            </email-preview>
        </ul>
    `,
    data() {
        return {
        selectedIds: [],
        }
    },
   

    components: {
        emailPreview
    }
}

