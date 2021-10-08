export const RECEIVE_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: RECEIVE_AUTHED_USER,
    id,
  }
}