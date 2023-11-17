<template>
  <div class="flex flex-col gap-4 w-screen h-screen p-2 md:p-4 lg:p-8 justify-between">
    <div class="flex flex-col-reverse gap-4 overflow-y-auto flex-1">
      <MessageEntry :key="key" v-for="(entry, key) in conversation" :entry="entry" />
    </div>
    <Compose v-model="message" @submit="sendReply(message)" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import MessageEntry from './MessageEntry.vue'
import Compose from './Compose.vue'

export default {
  name: 'ConversationComponent',
  data() {
    return {
      message: '',
    }
  },
  components: {
    MessageEntry,
    Compose,
  },
  computed: {
    conversation() {
      return this.$store.getters.reversedConversation
    },
  },
  methods: {
    sendReply() {
      if (this.message) {
        this.addNewMessage(this.message)
      }
      this.message = ''
    },
    ...mapActions(['addNewMessage']),
  },
}
</script>
