import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

export const Login = (email: string, password: string) => {
  return async (dispatch: Function) => {
    const {data } = await api.post('/login', {email, password});
    if (data.token) {
      await AsyncStorage.setItem('token', data.token);
      api.defaults.headers.Authorization = `Bearer ${data.token}`;
      dispatch({
        type: 'LOGIN',
        payload: data.token,
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: {error: data.error},
      });
    }
    console.log('token stored');
  };
};



export const OpenApp = () => {
  return async (dispatch: Function) => {

    const token = await AsyncStorage.getItem('token');
    api.defaults.headers.Authorization = `Bearer ${token}`;
    dispatch({
      type: 'OPEN_APP',
      payload: token,
    });
  };
};
export const Logout = () => {
  return async (dispatch: Function) => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
