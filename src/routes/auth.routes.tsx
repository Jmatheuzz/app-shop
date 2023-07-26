import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export default function routesAuth(){
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{title: ''}}>
            <Stack.Screen name="login"
            component={Login}
        />
        <Stack.Screen 
            name="signup"
            component={SignUp}
            options={{
                headerLeft: undefined,
            }}
        />
        </Stack.Navigator>
    );
}
