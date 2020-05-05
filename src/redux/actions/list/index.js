import * as type from '../../constants/action.types';
import { apiURL } from './../../../services/middleware/axios';

export const getList = () => {
    return dispatch => {
        dispatch({type: type.GET_LIST});
        apiURL.get('employees').then(res => {
            dispatch(getListSuccess(res.data));
        })
        .catch(err => {
            dispatch(getListFailed(err));
        });
    }
}

export const getListSuccess = (list) => {
    return {
       type: type.GET_LIST_SUCCESS, 
       payload: list.data
    }
}

export const getListFailed = (err) => {
    return dispatch => {
        dispatch({type: type.GET_LIST_FAILED, payload: err.status + ' ' + err.statsText});
    }
}