
export default {
    props: ['email', 'isSelected'],
    template: `
        <section class="preview-container" v-if="email" >
                <li class="flex">
                    <h4 class="prev-name">{{email.receivedFrom.name}}</h4>
                    <h4 class="prev-subj">{{email.subject}} - 
                        <a>{{email.body}}</a></h4>
                    <h4 class="prev-sent">{{email.sentAt}}</h4>
                </li>
       
        <!-- <section v-if="isSelected" >
            <li class="selected-preview">
                <h2>{{email.subject}}</h2>
                <h4>{{email.receivedFrom.name}}</h4>
                <h4>{{email.receivedFrom.addr}}</h4>
                <h4>{{email.body}}</h4>
            </li>
        </section> -->
    </section>
    `,
    // TODO - use MOMENT 
    // computed: {
    //     hours() {
    //         return this.email.sentAt.toLocaleDateString();
    //         }
    //     },
      
}
