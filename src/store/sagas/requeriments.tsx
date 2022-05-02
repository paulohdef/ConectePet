import Requisicao from '@/src/core/Requisicao'
import User from '@/src/core/User'
import { all, put, takeLatest } from 'redux-saga/effects'
import * as t from '../types'

function* fetchRequeriments() {
  try {
    const response: Requisicao = yield fetch('api/requeriment')

    const requerimentList = yield response.json()

    // console.log('resposta list' + JSON.stringify(requerimentList))

    yield put({
      type: t.REQUERIMENT_FETCH_SUCCEEDED,
      payload: requerimentList,
    })
  } catch (e) {
    yield put({
      type: t.REQUERIMENT_FETCH_FAILED,
      payload: e.message,
    })
  }
}
function* fetchUsers() {
  try {

    const response: User = yield fetch('api/users')

    const usersList: User  = yield response.json()

    // console.log('resposta list' + JSON.stringify(requerimentList))

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

function* watchFetchRequeriments() {
  yield takeLatest(t.REQUERIMENT_FETCH_REQUESTED, fetchRequeriments)
}

function* watchFetchUsers() {
  yield takeLatest(t.USERS_FETCH_REQUESTED, fetchUsers)
}


function* addRequeriment(action: any) {
  try {
    const response: Requisicao = yield fetch('/api/requeriment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    })

    const newRequeriment = yield response.json()

    yield put({
      type: t.REQUERIMENT_ADD_SUCCEEDED,
      payload: newRequeriment.data,
    })
  } catch (error) {
    yield put({
      type: t.REQUERIMENT_ADD_FAILED,
      payload: error.message,
    })
  }
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

function* watchAddReaddRequeriment() {
  yield takeLatest(t.REQUERIMENT_ADD_REQUESTED, addRequeriment)
}

function* watchAddReaddUsers() {
  yield takeLatest(t.USERS_ADD_REQUESTED, addUsers)
}

function* deleteRequeriment(action: any) {
  console.log('recebendo ID q sera deletado ' + action.payload)

  try {
    const response: Requisicao = yield fetch(
      'api/requeriment/' + action.payload,
      {
        method: 'DELETE',
      },
    )

    const deletedEmployee = yield response.json()

    yield put({
      type: t.REQUERIMENT_DELETE_SUCCEEDED,
      payload: deletedEmployee.data.id,
    })
  } catch (error) {
    yield put({
      type: t.REQUERIMENT_DELETE_FAILED,
      payload: error.message,
    })
  }
}

function* watchRemoveRequeriment() {
  yield takeLatest(t.REQUERIMENT_DELETE_REQUESTED, deleteRequeriment)
}

function* updateRequeriment(action: any) {
  console.log('recebendo dados para update ' + action.payload._id)
  console.log('recebendo dados para update 2 ' + action.payload)

  try {
    const response: Requisicao = yield fetch(
      'api/requeriment/' + action.payload._id,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      },
    )

    const updatedRequeriment = yield response.json()

    yield put({
      type: t.REQUERIMENT_UPDATE_SUCCEEDED,
      payload: updatedRequeriment.data,
    })
  } catch (error) {
    yield put({
      type: t.REQUERIMENT_UPDATE_FAILED,
      payload: error.message,
    })
  }
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

function* watchUpdateRequeriment() {
  yield takeLatest(t.REQUERIMENT_UPDATE_REQUESTED, updateRequeriment)
}

function* watchUpdateUsers() {
  yield takeLatest(t.USERS_UPDATE_REQUESTED, updateUsers)
}

export default function* rootSaga() {
  yield all([
    watchFetchRequeriments(),
    watchAddReaddRequeriment(),
    watchRemoveRequeriment(),
    watchUpdateRequeriment(),
    watchFetchUsers(),
    watchAddReaddUsers(),
    watchUpdateUsers(),
    
  ])
}
