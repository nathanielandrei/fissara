import * as type from '../../constants/action.types';

const loginInitialState = {
    user: null,
    isLoading: false,
    isLoaded: false,
    error: null
}

const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
        case type.LOGIN:
            return { ...state, isLoading: true };
        case type.LOGIN_SUCCESS:
            return { ...state, user: action.payload, isLoading: false, isLoaded: true };
        case type.LOGIN_FAILED:
            return { ...state, error: action.payload, isLoading: false, isLoaded:false };
        case type.LOGOUT: 
            return { ...state, user: null, isLoaded: false}
        default:
            return state;
    }
}

export { loginReducer };