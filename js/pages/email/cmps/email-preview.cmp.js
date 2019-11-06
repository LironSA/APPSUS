
export default {
    props: ['email', 'isSelected'],
    template: `
        <section v-else-if="isSelected" >
        
            <li v-if="email">
                <h4>{{email.receivedFrom.name}}</h4>
                <h4>{{email.subject}}</h4>
                <h4>{{email.body}}</h4>
                <h4>{{email.sentAt}}</h4>
            </li>
        </section>
       
        <section v-else-if="isSelected" >
            <li class="selected-preview">
                <h2>{{email.subject}}</h2>
                <h4>{{email.receivedFrom.name}}</h4>
                <h4>{{email.receivedFrom.addr}}</h4>
                <h4>{{email.body}}</h4>
            </li>
        </section>
    `,
    created: {
        
    }
}