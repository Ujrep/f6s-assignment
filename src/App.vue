<template>
  <div>
    <Conversation />
  </div>
</template>

<script>
import './assets/index.css'
import Conversation from './components/Conversation.vue'

export default {
  name: 'App',
  components: {
    Conversation,
  },
  created() {
    this.$store.dispatch('getCurrentUser')
    this.$store.dispatch('getCurrentConversation')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
