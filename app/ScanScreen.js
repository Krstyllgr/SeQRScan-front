import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Switch } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Slider from '@react-native-community/slider';
import Icon from '@expo/vector-icons/Ionicons';

import ErrorScreen from './ErrorScreen';
import SafeScreen from './SafeScreen'
import TextScreen from './TextScreen';

const ScanScreen = ({navigation}) => {
  //scanner
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  //Flashlight
  const [isEnabled, setIsEnabled] = useState(false);
  const [ftext, setftext] = useState('Flashlight')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }
  //Flashllight
  const toggleSwitch = () => {
    if (isEnabled) {
        setftext("Flashlight Off")
    }else{
        setftext("Flashlight On")
    }

    setIsEnabled(previousState => !previousState)
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
    {/*Scanner*/}
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 500, width: 500 }} />
      </View>
      {/*Flashlight Switch*/}
      <View style={styles.flashlight}>
        <Text style={{fontWeight: "bold"}}>{ftext}</Text>
        <Switch trackColor={{false: "grey", true: "#1E90FF"}} thumbColor={isEnabled ? "gray" : "#1E90FF"} onValueChange={toggleSwitch} value={isEnabled}/>
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {/*Zoom Slider*/}
      <View style={styles.slidercont}>
        <Icon name="remove-outline" size={20} color="#000"/>
        <Slider style={{width: 250, height: 40}}/>
        <Icon name="add-outline" size={20} color="#000"/>
      </View>
    <View style={styles.scanbtn}>
      {scanned && 
        <TouchableOpacity style={styles.scanbttn} onPress={() => setScanned(false)}>
          <Text style={styles.scantxt}>Scan Again?</Text>
        </TouchableOpacity>}
    </View>

    <View style={styles.rescontainer}>
        <TouchableOpacity style={styles.ebutton} onPress={() => navigation.navigate(ErrorScreen)}>
          <Text style={styles.etext}>Error</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbutton} onPress={() => navigation.navigate(SafeScreen)}>
          <Text style={styles.stext}>Safe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mbutton} onPress={() => navigation.navigate(TextScreen)}>
          <Text style={styles.mtext}>Text</Text>
        </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  barcodebox: {
    top: 180,
    alignItems: 'center',
    justifyContent: 'center',
    height: "35%",
    width: "80%",
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: "#fff"
  },
  flashlight:{
    top: 230,
    alignItems: 'center',
    flexDirection: 'row',
  },
  maintext: {
    fontSize: 18,
    margin: 20,
    top: 220,
    color: "#1E90FF",
  },
  slidercont:{
    top: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  scanbtn:{
    top: 180
  },
  scanbttn:{
    backgroundColor: "#1E90FF",
    height: 50,
    width: 150,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  scantxt:{
    fontSize: 15,
    fontWeight: "600"
  },
  rescontainer: {
        alignItems: 'center',
        justifyContent: "center",
        top: 250,
        flexDirection: 'row',
        width: "100%"
    },
    ebutton: {
        backgroundColor: "red",
        height: "100%",
        width: "20%",
        padding: "3%",
        alignItems: 'center',
        borderRadius: 5,
    },
    etext: {
        fontSize: 25,
        fontWeight: '900'
    },
    sbutton: {
        backgroundColor: "green",
        height: "100%",
        width: "20%",
        padding: "3%",
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: "10%"
    },
    stext: {
        fontSize: 25,
        fontWeight: '900'
    },
    mbutton: {
        backgroundColor: "blue",
        height: "100%",
        width: "20%",
        padding: "3%",
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: "10%"
    },
    mtext: {
        fontSize: 25,
        fontWeight: '900'
    }
});

export default ScanScreen;