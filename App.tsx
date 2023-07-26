import React, { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import RoutesAuth from './src/routes/auth.routes';
import { OpenApp } from './src/store/actions';
import Home from './src/screens/Home';

function Init(){
  const dispatch = useDispatch();
  dispatch(OpenApp());
  const token = useSelector(state => state.Reducers.authToken);

    return (
        <NavigationContainer>
          {token ? <Home/> : <RoutesAuth/>}
        </NavigationContainer>
    );
}

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Init/>
    </Provider>

  );
}

