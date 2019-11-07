
export default {
    props: ['email'],
    template: `
        <section class="preview-container" v-if="email" >
                <li class="prev-list flex">
                    <h4 class="prev-name">{{email.receivedFrom.name}}</h4>
                    <h4 class="prev-subj">{{email.subject}} - 
                        <a>{{email.body}}</a></h4>
                    <h4 class="prev-sent">{{timeToShow}}</h4>
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
    computed: {
        timeToShow() {
            var time = new Date(this.email.sentAt);
            var jsonDate = (time).toJSON().slice(0,19);
            return jsonDate;
            // return jsonDate.splice(10, 1, "000");
        }
    }
      
}
