'use strict';
import { eventBus } from "../../../services/event-bus.service.js";
export default {
    template: `
                <section class="email-filter">
                <input id="txtSearch"type="text" placeholder="search email" @input="setFilter">    
                <select id="selectVal" @change="setFilter">
                <option value="">All</option>
                <option value="isRead">Read</option>
                <option value="UnRead">UnRead</option>
                </select>
                </section>

    `,
    methods: {
        setFilter(ev) {
            eventBus.$emit('filterChange', { key: ev.target.id, val: ev.target.value })
        }
    }
}