import counterSaga from '@template/services/counterService/saga'
import { all, fork } from 'redux-saga/effects'

export default function* sagas() {
  yield all(
    [
      counterSaga,
    ].map(saga => fork(saga))
  )
}
