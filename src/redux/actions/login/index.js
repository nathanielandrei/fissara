import * as type from '../../constants/action.types';

export const loginAction = () => {
    return {
        type: type.LOGIN
    }
}

export const loginSuccess = (user) => {
    return {
        type: type.LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailed = (err) => {
    return {
        type: type.LOGIN_FAILED,
        payload: err
    }
}

export const logout = () => {
    return {
        type: type.LOGOUT
    }
}