import { eventBus } from "../../../services/event-bus.service.js";

// TODO - limit the prev body with MORE

export default {
    props: ['email'],
    template: `
    <section class="preview-container" v-if="email" @click="emailClicked">
        <li class="prev-list flex">
            <h4 class="prev-name">{{email.receivedFrom.name}}</h4>
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
                <button @click.stop="deleteEmail(email.id)">Delete</button>
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
        emailClicked() {
            this.isSelected = !this.isSelected;
        },
        deleteEmail(id) {
            eventBus.$emit('removeEmail', id)
            console.log("ID is here!!!",id)
        },
        showDetails() {

        }
    }
     
}
