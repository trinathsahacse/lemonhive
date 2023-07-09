import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME, setLocalStorage } from '../services/localStorage'
import { AccountsAPI } from '../api/accounts/request'
export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState: {
    token: null,
    adminProfile: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = ''
    },
    addAdminProfile: (state, action) => {
      state.adminProfile = action.payload
    }
    
  },
})

export const { addToken, removeToken, addAdminProfile } = accessTokenSlice.actions


export const loginAsync = (params) => async(dispatch) => {

  try {

    const response = await new  AccountsAPI().login(params);
    if(response) {
      setLocalStorage(LOCAL_STORAGE_AUTHORIZED_TOKEN_NAME, response.access_token);
      setLocalStorage('admin',JSON.stringify(response.admin));
      dispatch(addAdminProfile(response.admin))
      dispatch(addToken(response.access_token))
    } else
    throw new Error();
  }catch(e) {
    console.log(e);
  }
 
}


export const selectAccessToken = (state) => state.accessTokenReducer.token;
export const selectAdmin = (state) => state.accessTokenReducer.adminProfile;

export default accessTokenSlice.reducer