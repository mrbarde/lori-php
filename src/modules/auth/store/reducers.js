import * as types from './actionTypes';
import CreateReducer from 'CreateReducer';

/**
 * Auth Reducer
 * This holds the current auth state of the application
 * it is derived from the create reducer handelrs
 */
export const auth = CreateReducer(
    {
        isFetching: false,
        isAuthenticated: false,
        failed: false,
        message: false,
        creds: false
    }, 
    {
        [types.LOGIN_REQUEST]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGIN_SUCCESS]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGIN_FAILURE]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGOUT_REQUEST]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGOUT_SUCCESS]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGOUT_FAILURE]: (state, action) => {
            return Object.assign({}, state, action);
        }
    }
);