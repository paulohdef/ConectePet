import User from '@/src/core/User'
import { all, put, takeLatest } from 'redux-saga/effects'
import * as t from '../types'

function* fetchUsers() {
  console.log("response")
  try {
    console.log("response")
    const response: User = yield fetch('api/users')

    console.log(response)

    const usersList = yield response.json()

    console.log('resposta list' + JSON.stringify(usersList))

    yield put({
      type: t.USERS_FETCH_SUCCEEDED,
      payload: usersList,
    })
  } catch (e) {
    yield put({
      type: t.USERS_FETCH_FAILED,
      payload: e.message,
    })
  }
}

function* watchFetchUsers() {
  yield takeLatest(t.USERS_FETCH_REQUESTED, fetchUsers)
}

function* addUsers(action: any) {
  try {
    const response: User = yield fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })

    const newUsers = yield response.json()

    yield put({
      type: t.USERS_ADD_SUCCEEDED,
      payload: newUsers.data,
    })
  } catch (error) {
    yield put({
      type: t.USERS_ADD_FAILED,
      payload: error.message,
    })
  }
}

function* watchAddReaddUsers() {
  yield takeLatest(t.USERS_ADD_REQUESTED, addUsers)
}

function* updateUsers(action: any) {

  console.log('recebendo dados para update ' + action.payload._id)
  console.log('recebendo dados para update 2 ' + action.payload)

  try {
    const response: User = yield fetch(
      'api/users/' + action.payload._id,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      },
    )

    const updatedUsers = yield response.json()

    yield put({
      type: t.USERS_UPDATE_SUCCEEDED,
      payload: updatedUsers.data,
    })
  } catch (error) {
    yield put({
      type: t.USERS_UPDATE_FAILED,
      payload: error.message,
    })
  }
}

function* watchUpdateUsers() {
  yield takeLatest(t.USERS_UPDATE_REQUESTED, updateUsers)
}

export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
    watchAddReaddUsers(),
    watchUpdateUsers(),
  ])
}
