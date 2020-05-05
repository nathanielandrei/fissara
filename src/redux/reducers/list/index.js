import * as type from '../../constants/action.types';

const listInitialState = {
    list: [],
    isLoading: false,
    isLoaded: false,
    error: null
}

const listReducer = (state = listInitialState, action) => {
    switch (action.type) {
        case type.GET_LIST: 
            return { ...state, isLoading: true };
        case type.GET_LIST_SUCCESS: 
        console.info(action.payload);
            return { ...state, list: action.payload, isLoading: false, isLoaded: true };
        case type.GET_LIST_FAILED:
            return { ...state, error: action.payload}
        default:
            return state;
    }
}

export { listReducer };