import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, BackHandler} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

import Create from '../app/Create';


const DownloadScreen = ({navigation}) => {
    //TextInput
     const [text, setText] = useState("");
    //Save Button
    const onSave = () =>{
        setText("");
        showToast(true);
    }
    //Toast DL Success
    const showToast = () => {
        Toast.show({
            type: "success", //error, info
            text1: "QR code is Successfully Downloaded",
            autoHide: true,
            visibilityTime: 3000,
            position: 'top',
            topOffset: 50,
        })
    }

    return(
        <View style={styles.container}>

            <View style={styles.first}>
                <Text style={styles.dtext}>Download</Text>
                <TouchableOpacity style={styles.bckbttn} onPress={() => navigation.navigate(Create)}>
                    <Text style={styles.bcktxt}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.seccont}>
                {/*<Text style={styles.sizetext}>Enter Size: </Text>*/}
                <TextInput placeholder='100px' style={styles.inputpx} value={text} onChangeText={(value) => setText(value)}></TextInput>
                <TouchableOpacity style={styles.sbttn} onPress={onSave} >
                    <Text style={styles.stext}>Save</Text>
                </TouchableOpacity>
            </View>                

            <StatusBar style='auto'/>      
            <Toast/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: '100%'
    },
    first:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: "100%",
        height: 100,
        elevation: 20,
        shadowColor: "#000",
        backgroundColor: "#fff"
    },
    dtext:{
        fontSize: 18,
        fontWeight: '500',
        marginLeft: "5%",
        marginBottom: 15
    },
    bckbttn:{
        right: "5%",
        position: "absolute",
    },
    bcktxt:{
        marginBottom: 15,
        fontSize: 18,
        fontWeight: '500',
    },
    seccont:{
        top: "2%",
        width: "100%",
        alignItems: "center"
    },
    sizetext:{
        fontSize: 15,
        fontWeight: '500',
    },
    inputpx:{
        backgroundColor: "#fff",
        height: 50,
        width: "85%",
        marginTop: 20,
        borderWidth: 1,
        borderColor: "rgb(211, 211, 211)",
        borderRadius: 5,
        padding: 15
    },
    sbttn:{
        height: 50,
        width:"85%",
        backgroundColor: "#1E90FF",
        marginTop: 15,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5
    },
    stext:{
        fontSize: 18,
        fontWeight: '500',
        color: "#fff"
    }
})

export default DownloadScreen;