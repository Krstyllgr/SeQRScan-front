import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Modal} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

import DownloadScreen from '../app/DownloadScreen';


export default function Create({navigation}) {
    //show generate result
    const  [shouldShow, setShouldShow] = useState(false);
    //Clear Button
    const onClear = () =>{
        setText("");
        setShouldShow(false);
    }
    //Text Input
    const [text, setText] = useState("");
    //Add Button
    function addg(){
        showToast(true);
        setShouldShow(false);
        setText("");
    }
    // Toast Added to Gallery
    const showToast = () => {
        Toast.show({
            type: "success", //error, info
            text1: "QR code is Successfully Added to Gallery",
            autoHide: true,
            visibilityTime: 2500,
            position: 'top',
            topOffset: 50,
        })
    }
    
    return (
        <View style={styles.firstcont}>

         <View style={styles.containermain}>
         <Text style={styles.firsttext}>Creates</Text>

            <View style={styles.containersec}>
            <Text style={styles.enter}>Enter your URL in the text field below and click Generate QR code to create a QR code</Text>
            </View>

            <TextInput style={styles.urlinput} placeholder='Enter URL' value={text} onChangeText={(value) => setText(value)}/>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.gbutton} onPress={() => setShouldShow(true)}>
                    <Icon name="qr-code-outline" size={15} color="#fff" style={{ marginRight: 5}}/>
                    <Text style={styles.gtext}>
                        GENERATE
                    </Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.vbutton} onPress={onClear}>
                    <Icon name="close-outline" size={15} color="#fff" style={{ marginRight: 5}}/>
                    <Text style={styles.vtext}>
                        CLEAR
                    </Text>
                </TouchableOpacity>
            </View>
            {/*generate result*/}
            <View style={styles.generateqrcode}>
                {
                    shouldShow ? (
                        <View style={styles.qrcontent}>
                            <Text style={styles.generatetext}><Icon name="checkmark-done-outline" size={20} color="#fff" style={{ marginRight: 5}}/>Your QR code is ready!!</Text>

                            <View style={styles.maincont}>
                                <Text style={styles.note}><Icon name="alert-circle-outline" size={15} color="#CC0000" style={{ marginRight: 5}}/>Please insert description to add the QR code.</Text>
                                <View style={styles.qrcontdes}>
                                    <View style={styles.qrimg}>
                                        <Image style={styles.qrcodeimg} source={require('../assets/images/qrcode.png')}></Image>
                                    </View>
                                    <View style={styles.qrtext}>
                                        <Text style={styles.context}>Content: </Text>
                                        <Text style={styles.consmall}>QR code</Text>
                                        <Text style={styles.dtext}>Description: </Text>
                                        <TextInput style={styles.desc} value={Text} placeholder='Enter Description'></TextInput>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.mcont}>
                                <TouchableOpacity style={styles.dbutton} onPress={() => navigation.navigate(DownloadScreen)}>
                                    <Icon name="download-outline" size={20} color="#fff" style={{ marginRight: 5}}/>
                                    <Text style={styles.dltext}>Download</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.abutton} onPress={addg}>
                                    <Icon name="add-outline" size={20} color="#fff" style={{ marginRight: 5}}/>
                                    <Text style={styles.addtxt} >Add</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ) : null
                }
            </View>
        </View>
        
        <StatusBar style='auto'/>
        <Toast/>
        </View>
    );
}

const styles = StyleSheet.create({
    firstcont:{
        flex: 1,
        backgroundColor: "#fff",
        height: "100%",
        alignItems: "center",
        alignContent: "center",
        overflow: "scroll"
    },
    containermain: {
        height: "40%",
        width: "100%",
        backgroundColor: "#004594",
        alignItems: "center"
    },
    firsttext: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '900',
        top: 50,
        left: 30,
        position: "absolute"
    },
    containersec: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "40%",
        width: "100%"
    },
    enter: {
        fontSize: 14,
        textAlign: 'center',
        color: "#fff",
        marginTop: 100,
        marginLeft: "6%",
        marginRight: "6%"
    },
    urlinput:{
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        width: "86%",
        height: 50,
        marginTop: "5%",
        borderRadius: 5,
        color: "#000",
        borderWidth: 0.5,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        width: "100%",
        height: "22%",
    },
    gbutton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#25C196",
        borderRadius: 5,
        width: "40%",
        height: "60%",
        marginLeft: "8%"
    },
    gtext:{
        alignItems: "center",
        color: "#fff",
        fontSize: 16
    },
    vbutton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1E90FF",
        borderRadius: 5,
        width: "40%",
        height: "60%",
        marginLeft: "4%"
    },
    vtext: {
        fontSize: 16,
        color: "#fff",
        alignItems: "center",
    },
    generateqrcode: {
        top: "115%",
        width: "100%",
        alignItems: "center",
        position: "absolute",
    },
    qrcontent: {
        alignContent: "center",
        alignItems: "center",
        justifyContent: 'center',
        width: "100%",
        height: "110%",//"100%"
    },
    generatetext: {
        backgroundColor: "#00C2D4",
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        width: "70%",
        color: "#fff",
        fontWeight: "700",
        borderRadius: 5,
        textAlign: "center",
        paddingTop: 15,
        elevation: 20,
        shadowColor: 'black',
    }, 
    maincont: {
        backgroundColor: '#F0F8FF',
        height: 220,
        width: "70%",
        top: 20,
        borderWidth: 2,
        borderColor: "#00C2D4",
        borderRadius: 5,
        alignItems: 'center',
        elevation: 20,
        shadowColor: 'black',
    },
    note: {
        color: '#CC0000',
        top: 10,
        fontSize: 12,
        textAlign:"center"
    },
    qrcontdes: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        top:"25%",
        height: "60%",
        width: "100%",
        position: "absolute",
    },
    qrimg:{
        height: 120,
        width: 120,
        backgroundColor: "#fff",
        marginLeft: "10%",
        marginRight: "10%"
    },
    qrcodeimg: {
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
    }, 
    qrtext:{
        height: 100,
        width: "35%",
    },
    context: {
        fontWeight: "900",
        fontSize: 12,
        color: "#660000",
    },
    consmall:{
        textAlign: "center"
    },
    dtext: {
        fontWeight: "900",
        fontSize: 12,
        color: "#660000",
        marginTop: 40,
    }, 
    desc: {
        borderBottomWidth: .5,
        height: "18%",
        fontSize: 12,
        width: "100%",
        borderBottomColor: "#25C196",
        borderBottomWidth: 1,
    },
    mcont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
        backgroundColor: '#004594',
        height: 55,
        width: "70%",
        borderRadius: 10,
        elevation: 20,
        shadowColor: 'black',
    },
    dbutton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: "70%",
        textAlign: "center",
        width: "30%",
        borderRadius: 5,
        padding: "2%",
        marginRight: "4%"
    },
    dltext:{
        fontSize: 13,
        fontWeight: '600',
        color: "#fff",
    },
    abutton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#25C196",
        justifyContent: 'center',
        height: 35,
        textAlign: "center",
        width: "28%",
        borderRadius: 5,
    },
    addtxt:{
        fontSize: 13,
        fontWeight: '600',
        color: '#fff'
    }

}

);
