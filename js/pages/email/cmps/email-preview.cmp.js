import { eventBus } from "../../../services/event-bus.service.js";



// TODO - limit the prev body with MORE

export default {
    props: ['email'],
    template: `
    <section class="preview-container" v-if="email" @click="emailClicked(email.id)">
        <li class="prev-list flex">
            <!-- // ISREAD - to add method that recognizes the readqunread, -->
            <h4 class="prev-name" v-bind:class="{selectedEmail:email.isRead}"      
                >{{email.receivedFrom.name}}</h4>
            <h4 class="prev-subj">{{email.subject}} - 
                <a>{{email.body}}</a></h4> 
            <h4 class="prev-sent">{{timeToShow}}</h4>
        </li>
       
        <section v-if="isSelected" >
            <li class="selected-preview">   
                <h2>{{email.subject}}</h2>
                <h4>{{email.receivedFrom.name}}</h4>
                <h4>{{email.receivedFrom.addr}}</h4>
                <h4>{{email.body}}</h4>
                
                <!-- <button @click="detailedEmail">Full details</button> -->
                <!-- <button @click="replyEmail">Full details</button> -->
                <button @click.stop="removeEmail(email.id)">Delete</button>
                <!-- <router-link :to="'/book/details/' + book.id" >Book ID</router-link> -->
            </li>
        </section>
    </section>
    `,
    
    computed: {
        timeToShow() {
            var time = new Date(this.email.sentAt);
            var jsonDate = (time).toJSON().slice(0,10);
            return jsonDate;
            // return jsonDate.splice(10, 1, "000");
        }
    },
    data() {
        return {
            isSelected: false
        }
    },
    methods: {
        emailClicked(id) {
            this.isSelected = !this.isSelected;
            this.setEmailProperty(id, 'isRead', 'true')
        },
        removeEmail(id){
            eventBus.$emit('removeEmail',id)
        },
        setEmailProperty (id, prop, val) {
            var data = {id, prop, val}
            eventBus.$emit('setEmailProperty',data) 
        }
    }
}
