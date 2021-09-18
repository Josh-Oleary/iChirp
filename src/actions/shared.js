import { getInitialData } from '../utils/api'
import { recieveUsers } from './users'
import { receiveTweets } from './tweets'

export function handleInitialData () {
  return (dipatch) => {
    return getInitialData()
      .then(({users, tweets}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
      })
  }
}