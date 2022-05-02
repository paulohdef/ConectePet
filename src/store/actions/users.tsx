import User from '@/src/core/User'
import * as t from '../types'

export const fetchUsers = () => {
  return {
    type: t.USERS_FETCH_REQUESTED,
  }
}

export const addUsers= ((users: User )=> {
  return {
    type: t.USERS_ADD_REQUESTED,
    payload: users,
  }
})

export const updateUsers= (users: User) => {
  return {
    type: t.USERS_UPDATE_REQUESTED,
    payload: users,
  }
}

export const setSelectedUsers= (id) => {
  return {
    type: t.USERS_SELECTED,
    payload: id,
  }
}
