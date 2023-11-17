import Vue from 'vue'
import Vuex from 'vuex'

import { getMe, getConversation, sendReply } from '../mockApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      me: {},
      conversation: [],
    }
  },
  mutations: {
    setCurrentUser(state, user) {
      state.me = user
    },
    setCurrentConversation(state, conversation) {
      state.conversation = conversation
    },
    setNewMessage(state, message) {
      state.conversation.push(message)
    },
  },
  getters: {
    reversedConversation(state) {
      return state.conversation.toReversed()
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const currentUser = await getMe()
      try {
        const parsedUser = JSON.parse(currentUser)

        commit('setCurrentUser', parsedUser)
      } catch (err) {
        console.log('Error when parsing current user', err)
      }
    },

    async getCurrentConversation({ commit }) {
      const currentConversation = await getConversation()
      try {
        const parsedConversation = JSON.parse(currentConversation)

        commit('setCurrentConversation', parsedConversation)
      } catch (err) {
        console.log('Error when parsing current conversation', err)
      }
    },

    async addNewMessage({ commit, state }, payload) {
      const messageResponse = await sendReply(payload, state.me)

      commit('setNewMessage', messageResponse)
    },
  },
})
