import { currentUser, conversation } from './mock'
import { format } from 'date-fns'

const delay = 500

export const getMe = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(currentUser)
    }, delay)
  })
}

export const getConversation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(conversation)
    }, delay)
  })
}

export const sendReply = (message, user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const now = new Date()

      resolve({
        id: conversation[conversation.length - 1].id + 1,
        message,
        date: format(now, 'yyyy-MM-dd HH:mm:ss'),
        from: user,
      })
    }, delay)
  })
}
