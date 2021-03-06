'use strict';

import { combineReducers } from 'redux';

function authToken(state = null, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESSFUL':
      return action.payload.user.authToken;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

function username(state = null, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESSFUL':
      return action.payload.user.username;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

function loginPending(state = false, action) {
  switch (action.type) {
    case 'PROCESSING_LOGIN':
      return true;
    case 'LOGIN_FAILED':
      return false;
    case 'LOGIN_SUCCESSFUL':
      return false;
    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {
    case 'LOGIN_FAILED':
      return action.payload;
    case 'PROCESSING_LOGIN':
    case 'LOGIN_SUCCESSFUL':
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  authToken,
  loginPending,
  username,
  error,
});
