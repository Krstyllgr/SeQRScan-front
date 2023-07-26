import React from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import ScanScreen from '../app/ScanScreen';

const SafeScreen = ({navigation}) => {
    return (
      <View style={styles.firstcont}>
        <View style={styles.container}>
            <Text style={styles.stext}>Scan Result</Text>
            <Ionicons style={styles.iconcont} name="shield-checkmark" size={230} color="white" />
            <Text style={styles.ttext}>The encoded URL is found to be safe</Text>
            <View style={styles.qrimg}>
              <Image style={styles.qrcont} source={require('../assets/images/qrcode.png')}></Image>
              <Text style={styles.ctext}>Content</Text>
              <Text style={styles.urltext}>www.facebook.com</Text>
              <Text style={styles.stattext}>Safe</Text>
              <Text style={styles.rtext}>Suspicious</Text>
              <View style={styles.bttn}>
                <TouchableOpacity style={styles.pbttn}>
                  <Text style={styles.ptext}>Go to WWW.FACEBOOK.COM</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(ScanScreen)} style={styles.bbttn}>
                  <Text style={styles.btext}>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
            
        </View>
        </View>
      );
    }

const styles = StyleSheet.create({
  firstcont:{
    backgroundColor: "#fff",
    height: "100%",
    overflow: 'scroll',
  },
  container: {
    backgroundColor: '#00BF63',
    height: 410,
    alignItems: "center",
  },
  stext: {
    fontSize: 32,
    top: 50,
    left: 30,
    color: 'white',
    position: "absolute"
  },
  iconcont:{
    marginTop: 100
  },
  ttext: {
    fontSize: 20,
    color: 'white',
    marginBottom: 80
  },
  qrimg: {
    height: 150,
    width: 150,
    backgroundColor: "#000",
    alignItems: 'center',
  },
  qrcont: {
    height: "100%",
    width: "100%",
  },
  ctext: {
    top: "14%",
    fontWeight: '900'
  },
  urltext: {
    top: 20,
    color: "#00BF63"
  },
  stattext: {
    top: "20%",
    fontWeight: '900'
  },
  rtext: {
    top: 30,
    color: "#00BF63"
  },
  bttn: {
    alignItems: 'center',
    width: "100%"
  },  
  pbttn: {
    backgroundColor: '#00BF63',
    top: "40%",
    padding: 12,
    width: 350,
    height: 45,
    alignItems: 'center',
    borderRadius: 5
  },
  ptext: {
    fontWeight: '500',
    color: "#fff"
  },
  bbttn: {
    top: "45%",
    padding: "8%",
    width: "100%",
    height: "40%",
    alignItems: 'center',
    borderRadius: 8,
    //backgroundColor: "orange"
  },
  btext: {
    fontWeight: '900'
  }
})    

export default SafeScreen;

   

