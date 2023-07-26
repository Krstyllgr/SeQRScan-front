import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../app/Login';
import BottomTabNav from '../Navigation/BottomTabNav';


const Stack = createStackNavigator();

function Root() {
    return(
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="BottomTabNav" component={BottomTabNav} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
    )
}

export default Root; 