import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from '../../type';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null,
    };
    // state allows us to access anything in our state
    // dispatch allows us to dispatch objects to the reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User

    // Register User

    // Login User

    // Logout

    // Clear Errors

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
