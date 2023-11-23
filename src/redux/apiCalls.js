import { publicRequest } from '../request';
import { loginFailure, loginStart, loginSuccess } from './user/user';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/login', user);
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logout = (dispatch) => {
  dispatch(loginSuccess(false));
};

export const createUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/register', user);
    const responseData = res.data;
    console.log('Response Data:', responseData.id);
    delete responseData.headers;
    dispatch(loginSuccess(responseData));
  } catch (err) {
    dispatch(loginFailure());
  }
};
