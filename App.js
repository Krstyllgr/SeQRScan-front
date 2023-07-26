import {React} from 'react';
import * as Splashscreen from "expo-splash-screen";
import {StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import FirstNav from './Navigation/FirstNav';


Splashscreen.preventAutoHideAsync();
setTimeout(Splashscreen.hideAsync, 3000);

const FirstPage = () => {
    return (
        <NavigationContainer>
            <FirstNav/>
        </NavigationContainer>
    );
}
export default FirstPage;