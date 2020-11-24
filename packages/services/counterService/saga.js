import axios from 'axios'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'

const callBackend = (type, data, token) => {
  return axios.post(
    `${process.env.API_URL}/${type}`,
    { data },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  )
}

const callBackendDelete = data => {
  return axios.post(`${process.env.API_URL}/delete`, { data })
}

const prettify = (code, parser) => {
  return axios.post(`${process.env.API_URL}/prettify`, code, parser)
}

export function* watchPrettifyCode(code, parser = 'babel') {
  try {
    const res = yield prettify({ code, parser })
    return res.data
  } catch (error) {
    // yield put(setError(error.message))
  }
}
export function* watchCreate({ payload }) {
  if (!payload) return
  try {
    const res = yield callBackend('create', payload)
  } catch (error) {
    // yield put(setError(error.message))
  }
}

export function* watchUpdate({ payload }) {
  if (!{ payload }) return
  try {
    const res = yield callBackend('update', payload)
    return res
  } catch (error) {
    // yield put(setError(error.message))
  }
}

export function* watchRead({ payload }) {
  try {
    const token = (yield select()).loginServiceReducer.user.token
    const res = yield callBackend('read', payload, token)
    return res.data
  } catch (error) {
    // yield put(setError(error.message))
  }
}

export function* watchDelete({ payload }) {
  if (!payload) return
  try {
    const res = yield callBackendDelete(payload.data)
    return res
  } catch (error) {
    // yield put(setError(error.message))
  }
}

export default function* rootSaga() {
  yield takeLatest('backend/prettifyCode', watchPrettifyCode)
  yield takeLatest('backend/createItem', watchCreate)
  yield takeEvery('backend/readItem', watchRead)
  yield takeLatest('backend/updateItem', watchUpdate)
  yield takeLatest('backend/deleteItem', watchDelete)
}
