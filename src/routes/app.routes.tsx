import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

export default function RoutesApp(){
    return (
        <Drawer.Navigator initialRouteName="Início">
            <Drawer.Screen name="Início"
            component={Home}
        />
        </Drawer.Navigator>
    );
}
