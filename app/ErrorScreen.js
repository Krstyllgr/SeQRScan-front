import React, {useState} from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity, Modal} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


import ScanScreen from '../app/ScanScreen';

const ErrorScreen = ({navigation}) => {
  //modal
  const [isDelModalVisible, setisDelModalVisible] = useState(false);
  const changeDelModalVisible = (bool) => {
    setisDelModalVisible(bool);
  }

    return (
      <View style={styles.maincont}>
        
        <View style={styles.container}>
            <Text style={styles.stext}>Scan Result</Text>
            <Ionicons style={styles.iconcont} name="shield-checkmark" size={230} color="white" />
            <Text style={styles.ttext}>The encoded URL is found to be suspicious</Text>

            <View style={styles.qrimg}>
              <Image style={styles.qrcont} source={require('../assets/images/qrcode.png')}></Image>
              <Text style={styles.ctext}>Content</Text>
              <Text style={styles.urltext}>www.faceb00k.com</Text>
              <Text style={styles.stattext}>Status</Text>
              <Text style={styles.rtext}>Suspicious</Text>

              <View style={styles.bttn}>
                <TouchableOpacity style={styles.pbttn} onPress={() => changeDelModalVisible(true)}>
                  <Text style={styles.ptext}>Go to WWW.FACEB00K.COM</Text>
                </TouchableOpacity>

                {/*Modal*/}
                <Modal transparent={true} visible={isDelModalVisible} animationType='fade' nRequestClose={() => changeDelModalVisible(false)} >
                    <View style={styles.modalcont}>
                        <Text style={styles.customtext}>Custom Alert</Text>
                        <Text style={styles.deltext}>The encoded URL has been flagged by system as potentially malicious. We recommend you not to visit the site. Do you still want to continue?</Text>
                      <View style={styles.delbttns}>
                        <TouchableOpacity style={styles.cancelbttn} onPress={() => changeDelModalVisible(false)}>
                          <Text style={styles.canceltext}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.yesbttn} onPress={() => changeDelModalVisible(false)}>
                          <Text style={styles.yestext}>Yes</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </Modal>
                {/*Back Button*/}
                <TouchableOpacity onPress={() => navigation.navigate(ScanScreen)} style={styles.bbttn} >
                  <Text style={styles.btext}>Back</Text>
                </TouchableOpacity>
              </View>

            </View>

        </View>
        </View>
          
      );
    }

const styles = StyleSheet.create({
  maincont:{
    backgroundColor: "#fff",
    height: "100%",
    overflow: 'scroll',
  },
  container: {
    backgroundColor: '#b80000',
    height: 410,
    width: "100%",
    alignItems: "center",
  },
  stext: {
    fontSize: 32,
    top: 50,
    left: 30,
    color: '#fff',
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
    color: "#b80000"
  },
  stattext: {
    top: "20%",
    fontWeight: '900'
  },
  rtext: {
    top: 30,
    color: "#b80000"
  },
  bttn: {
    alignItems: 'center',
    width: "100%"
  },  
  pbttn: {
    backgroundColor: '#b80000',
    top: "40%",
    padding: 10,
    width: 350,
    height:45,
    alignItems: 'center',
    borderRadius: 5,
  },
  ptext: {
    fontWeight: '500',
    color: "#fff"
  },
  modalcont:{
    backgroundColor:"#FF914D",
    width: "80%",
    marginLeft: "10%",
    marginTop: 40,
    padding: 20,  
    top: 320,
    borderRadius: 10,
    elevation: 100,
    shadowColor: "black",
  },
  customtext: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '900',
    marginBottom: '5%',
  },
  deltext:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'justify'
  },
  delbttns:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  cancelbttn:{
    padding: 12,
    marginTop: '5%',
    width: 100,
    marginRight: '3%'
  },
  canceltext:{
    color: '#fff',
    fontSize: 18,
    marginLeft: "8%",
    fontWeight: '900'
  },
  yesbttn:{
    padding: 12,
    alignItems: "center",
    backgroundColor: '#b80000',
    borderRadius: 5,
    marginTop: '5%',
    width: 100
  },
  yestext:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '900'
  },
  bbttn: {
    top: "45%",
    padding: "8%",
    width: "80%",
    height: "40%",
    alignItems: 'center',
    borderRadius: 8,
  },
  btext: {
    fontWeight: '900'
  },


})    

export default ErrorScreen;

   

