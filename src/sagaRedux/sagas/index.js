import { put, call, takeLatest ,all, take,race} from 'redux-saga/effects'
//import { getUsers } from '../services/users.api.js'
//export const getUsers = () => fetch('https://jsonplaceholder.typicode.com/users')

// 1
/*
function* getUsersSaga() {
  //const res = yield call(getUsers)
  //const res = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'))
  const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/users')
  const data = yield res.json()

  yield put({ type: 'GET_USERS_SUCCESS', payload: data })
}
*/

// https://redux-saga.js.org/docs/basics/ErrorHandling.html

// 2
/*
function* getUsersSaga() {
  try {
    const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put({ type: 'GET_USERS_SUCCESS', payload: data })
  } catch (e) {
    console.log('error: ', e.message)
    //yield put({ type: 'GET_USERS_FAILED', message: e.message })
  }
}
*/

// 3
const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function* getUsersSaga() {
  console.log("API call");
  const { response, error } = yield call(getUsers)
  if (response) {
    const data = yield response.json()
    yield put({ type: 'GET_USERS_SUCCESS', payload: data })
  } else {
    console.log('error: ', error.message)
    //yield put({ type: 'GET_USERS_FAILED', message: error.message })
  }
}

export default function* rootSaga() {
  //yield race([call(getUsersSaga,[take('GET_USERS_REQUEST', )])])
  yield takeLatest('GET_USERS_REQUEST', getUsersSaga)
  //yield race([call(getLocationsSaga), take(STOP_WATCHER)]);
}
