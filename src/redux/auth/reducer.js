import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,

    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from '../actions';

const INIT_STATE = {
    user: localStorage.getItem('user_id'),
    forgotUserMail: '',
    newPassword: '',
    resetPasswordCode: '',
    loading: false,
    error: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload.uid, error: '' };
        case LOGIN_USER_ERROR:
            return { ...state, loading: false, user: '', error: action.payload.message };

        case REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload.uid, error: '' };
        case REGISTER_USER_ERROR:
        default: return { ...state };
    }
}
