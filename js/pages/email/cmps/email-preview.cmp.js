
export default {
    props: ['email', 'isSelected'],
    template: `
        <section class="preview-container" v-if="email" >
            <section class="preview-list" >
                <li >
                    <h4>aaa</h4>
                    <!-- <h4>{{email.subject}}</h4>
                    <h4>{{email.body}}</h4>
                    <h4>{{email.sentAt}}</h4> -->
                </li>
        </section>
<!--        
        <section v-if="isSelected" >
            <li class="selected-preview">
                <h2>bbb</h2>
                <!-- <h4>{{email.receivedFrom.name}}</h4>
                <h4>{{email.receivedFrom.addr}}</h4>
                <h4>{{email.body}}</h4> -->
            </li>
        </section> -->
    </section>
    `,
    created: {
        
    }
}