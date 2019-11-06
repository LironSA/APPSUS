import emailPreview from  './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `
    <section>
        <ul class="email-list">
            <email-preview v-for="email in emails" :key="email.id" v-bind:email="email">
            </email-preview>
        </ul>
    </section>
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

