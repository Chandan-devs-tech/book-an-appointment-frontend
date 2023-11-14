/* eslint-disable */
import { publicRequest } from "../request";
import { loginFailure, loginStart, loginSuccess } from "./user/user"
import { addFailure, addStart, addSuccess } from './cars/addVehicle';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user)
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData))
  } catch (err) {
    dispatch(loginFailure())
  }
}
export const logout = (dispatch) => {
  dispatch(loginSuccess(false))
}

export const createUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/register", user)
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const addVehicle = async (dispatch, details) => {
  dispatch(addStart());
  try {
    const res = await publicRequest.post('/cars', details);
    const responseData = res.data;
    delete responseData.headers;
    dispatch(addSuccess(responseData));
  } catch (err) {
    dispatch(addFailure());
  }
};
