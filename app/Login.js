import {React, useState} from 'react';
import * as Splashscreen from "expo-splash-screen";
import {StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Icon from '@expo/vector-icons/Ionicons';
import 'react-native-gesture-handler';

import BottomTabNav from '../Navigation/BottomTabNav';
//SplashScreen 
Splashscreen.preventAutoHideAsync();
setTimeout(Splashscreen.hideAsync, 3000);//Timer

//Text Input
const Login = ({navigation}) => {
    const [text, setText] = useState("");
    const [pass, setPass] = useState("");
    //Login Button
    function loginbtn(){
    setText("");
    setPass("");
    navigation.navigate(BottomTabNav);
    }

    return (
            <View style={styles.containermain}>
                <Image source={require('../assets/images/wave.png')} style={styles.imgtop}/>
                <View style={styles.logincont}>
                <Icon name="person-circle-outline" size={130} color="#004594"/>
                <Text style={styles.wtext}>Welcome Back</Text>
                <Text style={styles.signtext}>Sign in to Continue</Text>
                <View style={styles.containerone}>
                    <TextInput style={styles.inputemail} placeholder='Email' value={text} onChangeText={(value) => setText(value)}/>
                    <View style={styles.warningecont}>
                        <Text style={styles.wemail}><Icon name="alert-circle" size={15} color="red" style={{ marginRight: 10}}/>Incorrect Email</Text>
                    </View>
                    <TextInput style={styles.inputpass} placeholder='Password' value={pass} onChangeText={(value) => setPass(value)}/>
                   <View style={styles.warningpcont}>
                         <Text style={styles.wpass}><Icon name="alert-circle" size={15} color="red" style={{ marginRight: 10}}/>Incorrect Password</Text>
                   </View>
                    <TouchableOpacity style={styles.ButtonL} onPress={loginbtn}>
                        <Text style={styles.textL}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.orcont}>
                        <Text style={styles.textor}>or</Text>
                    </View>
                    <TouchableOpacity style={styles.ButtonG}>
                    <Image source={require('../assets/images/google.png')} style={{height: 20, width: 20, marginRight: 20 }}/>
                        <Text style={styles.textG}>
                            CONTINUE WITH GOOGLE
                        </Text>
                    </TouchableOpacity>
                        </View>
                        <View style={styles.contneed}>
                            <Text style={styles.textneed}>Need an account? Press the Google button above or sign up with email</Text>
                        </View>
                        <View style={styles.logo}>
                            <Icon name="qr-code-outline" size={25} color="#004594" style={{ marginRight: 10}}/>
                            <Text style={styles.logotext}>SeQRscan</Text>
                        </View>
                </View>
                <StatusBar style='auto'/>
                
            </View>
    );
}

const styles = StyleSheet.create({
    containermain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#fff',
        height: "100%"
    },
    imgtop: {
        width: "100%",
        height: "15%"
    },
    logincont:{
        flex: 1,
        width: "100%",
        alignItems: "center",
        height: "100%",
    },
    wtext: {
        fontSize: 25,
        fontWeight: '900',
        textAlign: "center"
    },
    signtext: {
        marginTop: 10,
        textAlign: "center"
    },
    containerone: {
        width: '95%',
        height: "100%",
        top: "2%",
        paddingLeft: "10%",
        paddingRight: "5%",
        alignItems: "center",
        //backgroundColor: "#000"
    },
    inputemail: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 5,
        color: "#000",
        borderColor: "#C0C0C0",
        borderWidth: 0.5,
        width: "94%",
        height: 50,
    },
    warningecont: {
        position: "absolute",
        width: "100%",
        top: 50,
        left: 8
    },
    wemail:{
        color: "red",
        fontWeight: "700",
        textAlign: "center",
        fontSize: 12,
        position: "absolute",
        left: "15%",
    },
    inputpass: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 5,
        color: "#000",
        borderColor: "#C0C0C0",
        borderWidth: 0.5,
        marginTop: 25,
        width: "94%",
        height: 50
    },
    warningpcont:{
        position: "absolute",
        width: "100%",
        top: 125,
        left: 8
    },
    wpass:{
        color: "red",
        fontWeight: "700",
        fontSize: 12,
        position: "absolute",
        left: "15%",
    },
    ButtonL: {
        alignItems: "center",
        backgroundColor: "#004594",
        padding: 13,
        borderRadius: 5,
        top: 25,
        height: 45,
        width: "95%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    }, 
    textL: {
        color: "#fff",
        fontFamily: "",
        //fontWeight: '700',
        fontSize: 15
    },
    orcont:{
        height: "3%",
        width: "8%",
        position: "absolute",
        top: 200,
    },
    textor: {
        color: "gray",
        textAlign: 'center',
        justifyContent: "center",
        fontSize: 12,
        marginRight: "10%",
        marginLeft: "10%"
    },
    ButtonG: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(228, 228, 228)",
        padding: 13,
        borderRadius: 5,
        top: 50,
        marginBottom: 12,
        height: 45,
        width: "95%",
        elevation: 5,
        shadowColor: "#000"
    },
    textG: {
        color: "#000",
        fontFamily: "",
        //fontWeight: "700",
        fontSize: 15,
        textAlign: "center"
    },
    contneed:{
        height: "10%",
        //backgroundColor: "orange",
        position: "absolute",
        top: 500,
    },
    textneed: {
        color: "gray",
        textAlign: 'center',
        justifyContent: "center",
        fontSize: 14,
        marginRight: "10%",
        marginLeft: "10%"
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        position: "absolute",
        top: 650,
    },
    logotext: {
        color: "green",
        fontWeight: "900"
    }
});

export default Login;