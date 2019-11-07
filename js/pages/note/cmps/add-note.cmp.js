'use strict';

export default {
    template: `
        <form class="add-note">
            <input id="addNote" type="text" placeholder="currPlaceholder">    
            <select id="selectNoteType" v-model="noteType">
            <option value="txt">text</option>
            <option value="list">todo</option>
            <!-- <option value="isRead">img</option>
            <option value="isRead">vidio</option>
            <option value="UnRead">audio</option> -->
            </select>
        </form>
    `,
    data() {
        return {
            noteType: 'txt',
        }
    },
    computed: {
        currPlaceholder() {
            let placeholder;
            if (this.noteType === 'txt')
                placeholder = "What's on your mind?";
            if (this.noteType === 'list')
                placeholder = "Enter your TODO list";

                console.log('placeholder: ', placeholder)
                return placeholder
            }
    }
}
