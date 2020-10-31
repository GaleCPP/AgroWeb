
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { auth, firestore } from '../../helpers/Firebase';
import { firestorage } from '../../helpers/Firebase'
import {
    REGISTER_USER,
} from '../actions';

import {
    registerUserSuccess,
    registerUserError,
} from './actions';

const registerWithEmailPasswordAsync = async (email, password) =>
    await auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);

function* registerWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const imageFile = payload.imageFile;
    const { history } = payload
    try {
        const registerUser = yield call(registerWithEmailPasswordAsync, email, password);
    } catch (error) {
        yield put(registerUserError(error));
    }
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export default function* rootSaga() {
    yield all([
        fork(watchRegisterUser),

    ]);
}