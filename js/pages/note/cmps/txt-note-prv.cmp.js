'use strict'

export default {
    props: ['note'],
    template: `
    <section class="txt-note-prv-container" v-if="note">
        <p>{{note.content}}</p>
    </section>
     ` 
}

