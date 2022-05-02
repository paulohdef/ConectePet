import User from '@/src/core/User'
import { HYDRATE } from 'next-redux-wrapper'
import * as t from '../types'

const initialState = {
  usersList: [],
  selectedUser: undefined,
  isModalOpen: false,
}

const mainReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }

    case t.USERS_FETCH_SUCCEEDED:
      return {
        ...state,
        usersList: action.payload,
      }
    case t.USERS_ADD_SUCCEEDED:
      return {
        ...state,
        usersList: [action.payload, ...state.usersList],
      }
    case t.USERS_UPDATE_SUCCEEDED:
      const updatedUsers = state.usersList.map(
        (users: User) => {
          if (users._id === action.payload._id) {
            return {
              ...users,
              situacao: action.payload.situacao,
              departamento: action.payload.departamento,
              status: action.payload.status,
              tipo: action.payload.tipo,
            }
          }
          return users
        },
      )
      return { ...state, requerimentList: updatedUsers }

    case t.USERS_SELECTED:
      const selectedUsers = state.usersList.find(
        (users: User) => users._id === action.payload,
      )
      return {
        ...state,
        selectedUsers,
      }

    default:
      return state
  }
}

export default mainReducer
