import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CreateDownload from './CreateDownload';
import ScanNavigator from './ScanResultNavigation';
import Gallery from '../app/Gallery';
import History from '../app/History';
import Account from  '../app/Account';

const Tab = createBottomTabNavigator();
const ScreenOption = {
  tabBarActiveTintColor: "#1E90FF",
  tabBarStyle:{
    height: 55,
    backgroundColor: "#fff",
  }
}

function BottomTabNav() {
  return (
      <Tab.Navigator screenOptions={ScreenOption}>
      
        <Tab.Screen name='Scan' component={ScanNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 10,
            fontWeight: '900'
          },
          tabBarIcon: ({color})=> (
          <Ionicons name="scan-circle-outline" size={22} color={color}/>
          ),
          }}
        />

        <Tab.Screen name='Gallery' component={Gallery}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 10,
            fontWeight: '900'
          },
          tabBarIcon: ({ color}) => (
        <Ionicons name="images-outline" size={22} color={color}/>
            ),
          }}
        />

        <Tab.Screen name='Create' component={CreateDownload}
        options={{
          headerShown: false, 
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 10,
            fontWeight: '900'
          },
          tabBarIcon: ({ color}) => (
        <Ionicons name="add-circle-outline" size={22} color={color}/>
            ),
          }}
        />

        <Tab.Screen name='History' component={History}
        options={{
          headerShown: false, 
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 10,
            fontWeight: '900'
          },
          tabBarIcon: ({ color}) => (
        <Ionicons name="time-outline" size={22} color={color}/>
            ),
          }}
        />

        <Tab.Screen name='Account' component={Account}
        options={{
          headerShown: false, 
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 10,
            fontWeight: '900'
          },
          tabBarIcon: ({ color}) => (
        <Ionicons name="person-outline" size={22} color={color}/>
            ),
          }}
        />

      </Tab.Navigator>
  );
}

export default BottomTabNav;