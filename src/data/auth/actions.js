import config from '../config/app';
import * as types from './actionTypes';
        
// login request action
const requestLogin = (creds) =>{
	return {
		type: types.LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false,
		creds: creds
	};
}
// receive login action
const receiveLogin = (token) =>{
	return {
		type: types.LOGIN_SUCCESS,
		isFetching: false,
		isAuthenticated: true
	};
}
// login error action
const loginError = (message, errors = []) =>{
	return {
		type: types.LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message: message,
		errors: errors
	};
}
// logout request action
const requestLogout = () =>{
	return {
		type: types.LOGOUT_REQUEST,
		isFetching: true,
		isAuthenticated: true
	};
}
// receive logout action
const receiveLogout = () =>{
	return {
		type: types.LOGOUT_SUCCESS,
		isFetching: false,
		isAuthenticated: false
	};
}
// logout error action
const logoutError = (message) =>{
	return {
		type: types.LOGOUT_FAILURE,
		isFetching: false,
		isAuthenticated: true,
		message: message
	};
}

// log user in
export const login = (creds) => {
	
	return dispatch => {
		// begin login request
		dispatch(requestLogin(creds));
		// set token to local storage
		localStorage.setItem('token', true);
		// dispatch receive user action
		dispatch(receiveLogin({}));
		// dispatch login error
		dispatch(loginError("Incorrect username or password.", {}));
	}

}

// log user out
export const logout = () => {
	return dispatch => {
		// dispatch request logout
		dispatch(requestLogout());
		try{
			// remove token from local storage
			localStorage.removeItem('token');
			// log user out
			dispatch(receiveLogout());
		}
		catch(err){
			if(config.env == 'local'){
				// log error to console
				console.log(err)
			}
			// dispatch logout error
			dispatch(logoutError("An error occured while logging you out."));
		}
	}
}