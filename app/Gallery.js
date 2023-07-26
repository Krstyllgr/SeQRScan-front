import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,TouchableOpacity, Modal, TextInput, Platform} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import { useRef } from "react"; 
import Toast from 'react-native-toast-message';

export default function Gallery( ) {
  //Bottom heet Modal
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["32%","40%"];//bottomsheetmodal height
  //Open Modal
  function handlePresentModal(){
      bottomSheetModalRef.current?.present();
      setIsOpen(true);
  }
  //Close Modal
  function handleCloseModal() {
      bottomSheetModalRef.current?.close();
      setIsOpen(false);
  }
  //container Opacity
  const [isOpen, setIsOpen] = useState(false);
  //Text Input
  const [text, setText] = useState("");

  //Modal
  const [isDelModalVisible, setisDelModalVisible] = useState(false);
  const changeDelModalVisible = (bool) => {
    setisDelModalVisible(bool);
  }
  //Yes Button in Modal
  function yesexit(){
    showDelToast(true);
    setText("");
    changeDelModalVisible(false);
    bottomSheetModalRef.current?.close();
    setIsOpen(false);
  }
  //DL Button in BttmSheetMdl
  function downloadexit(){
    setText("");
    showToast(true);
    bottomSheetModalRef.current?.close();
    setIsOpen(false);
  }
  //Toast DL Success
  const showToast = () => {
    Toast.show({
        type: "success", //error, info
        text1: "QR code is Successfully Downloaded",
        autoHide: true,
        visibilityTime: 2500,
        position: 'top',
        topOffset: 50,
    })
  }
  //Toast Del
  const showDelToast = () => {
    Toast.show({
        type: "success", //error, info
        text1: "QR code is Successfully Deleted",
        autoHide: true,
        visibilityTime: 2500,
        position: 'top',
        topOffset: 50,
    })
  }

  return (
    <BottomSheetModalProvider>
      <View style={[styles.container, {opacity: isOpen ? 0.3:1}]}>
        <Text style={styles.gtext}>Gallery</Text>
        <Text style={styles.ytext}>You can change the size of the QR code by changing the value below</Text>

        <View style={styles.sizecont}>
          <Text style={styles.stext}>Size: </Text>
          <TextInput style={styles.sizeinput} placeholder='100px' value={text} onChangeText={(value) => setText(value)}></TextInput>
        </View>


        <View style={styles.firstcont}>
          <View style={styles.qrcont}>
            <Image style={styles.qrcodeimg} source={require('../assets/images/qrcode.png')}></Image>
          </View>
          <View style={styles.texts}>
            <Text style={styles.bold}>Description: </Text>
            <Text style={styles.small}>Facebook</Text>
            <Text style={styles.bold}>Content: </Text>
            <Text style={styles.small}>https://www.facebook.com</Text>
            <Text style={styles.bold}>Created: </Text>
            <Text style={styles.small}>07-11-25</Text>
          </View>
            <TouchableOpacity style={styles.ellipbttn} onPress={handlePresentModal}>
              <Icon name="ellipsis-vertical-circle-outline" size={20} color="#fff"/>
            </TouchableOpacity>
            {/*BottomSheetModal*/}
            <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} enablePanDownToClose={false}>
                <View style={styles.bttmmodal}>
                    <Text style={styles.optiontext}>Options</Text>
                    <TouchableOpacity style={styles.dlbttn} onPress={downloadexit}>
                      <Text style={styles.dltext}>Download (100px)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delbttn} onPress={() => changeDelModalVisible(true)}>
                      <Text style={styles.deletetext}>Delete</Text>
                    </TouchableOpacity>
                    {/*Modal*/}
                    <Modal transparent={true} visible={isDelModalVisible} animationType='fade' nRequestClose={() => changeDelModalVisible(false)} >
                        <View style={styles.modalcont}>
                            <Text style={styles.deltext}>Are you sure you want to delete this QR code?</Text>
                          <View style={styles.delbttns}>
                            <TouchableOpacity style={styles.cancelbttn} onPress={() => changeDelModalVisible(false)}>
                              <Text style={styles.canceltext}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.yesbttn} onPress={yesexit}>
                              <Text style={styles.yestext}>Yes</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Modal>
                    {/*Cancel Bttn in BttmSheetMdl*/}  
                    <TouchableOpacity style={styles.cancbttn} onPress={handleCloseModal}>
                      <Text style={styles.canctext}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheetModal>
        </View>

        <View style={styles.secondcontainer}>
          <View style={styles.seccont}>
            <View style={styles.qrcont}>
              <Image style={styles.qrcodeimg} source={require('../assets/images/qrcode.png')}></Image>
            </View>
            <View style={styles.texts}>
              <Text style={styles.bold}>Description: </Text>
              <Text style={styles.small}>Facebook</Text>
              <Text style={styles.bold}>Content: </Text>
              <Text style={styles.small}>https://www.facebook.com</Text>
              <Text style={styles.bold}>Created: </Text>
              <Text style={styles.small}>07-11-25</Text>
            </View>
              <TouchableOpacity style={styles.ellipbttn} onPress={handlePresentModal}>
                <Icon name="ellipsis-vertical-circle-outline" size={20} color="#fff"/>
              </TouchableOpacity>
               {/*BottomSheetModal*/}
              <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} enablePanDownToClose={false}>
                  <View style={styles.bttmmodal}>
                      <Text style={styles.optiontext}>Options</Text>
                      <TouchableOpacity style={styles.dlbttn} onPress={downloadexit}>
                        <Text style={styles.dltext}>Download (100px)</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.delbttn} onPress={() => changeDelModalVisible(true)}>
                        <Text style={styles.deletetext}>Delete</Text>
                      </TouchableOpacity>
                      {/*Modal*/}
                      <Modal transparent={true} visible={isDelModalVisible} animationType='fade' nRequestClose={() => changeDelModalVisible(false)} >
                        <View style={styles.modalcont}>
                            <Text style={styles.deltext}>Are you sure you want to delete this QR code?</Text>
                          <View style={styles.delbttns}>
                            <TouchableOpacity style={styles.cancelbttn} onPress={() => changeDelModalVisible(false)}>
                              <Text style={styles.canceltext}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.yesbttn} onPress={yesexit}>
                              <Text style={styles.yestext}>Yes</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Modal>
                      {/*Cancel Bttn in BttmSheetMdl*/} 
                      <TouchableOpacity style={styles.cancbttn} onPress={handleCloseModal}>
                        <Text style={styles.canctext}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
              </BottomSheetModal>
          </View>

        <View style={styles.secondcontainer}>
          <View style={styles.seccont}>
            <View style={styles.qrcont}>
              <Image style={styles.qrcodeimg} source={require('../assets/images/qrcode.png')}></Image>
            </View>
            <View style={styles.texts}>
              <Text style={styles.bold}>Description: </Text>
              <Text style={styles.small}>Facebook</Text>
              <Text style={styles.bold}>Content: </Text>
              <Text style={styles.small}>https://www.facebook.com</Text>
              <Text style={styles.bold}>Created: </Text>
              <Text style={styles.small}>07-11-25</Text>
            </View>
            <TouchableOpacity style={styles.ellipbttn} onPress={handlePresentModal}>
                <Icon name="ellipsis-vertical-circle-outline" size={20} color="#fff"/>
              </TouchableOpacity>
              {/*BottomSheetModal*/}
              <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={snapPoints} enablePanDownToClose={false}>
                  <View style={styles.bttmmodal}>
                      <Text style={styles.optiontext}>Options</Text>
                      <TouchableOpacity style={styles.dlbttn} onPress={downloadexit}>
                        <Text style={styles.dltext}>Download (100px)</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.delbttn} onPress={() => changeDelModalVisible(true)}>
                        <Text style={styles.deletetext}>Delete</Text>
                      </TouchableOpacity>
                      {/*Modal*/}
                      <Modal transparent={true} visible={isDelModalVisible} animationType='fade' nRequestClose={() => changeDelModalVisible(false)}>
                        <View style={styles.modalcont}>
                            <Text style={styles.deltext}>Are you sure you want to delete this QR code?</Text>
                          <View style={styles.delbttns}>
                            <TouchableOpacity style={styles.cancelbttn} onPress={() => changeDelModalVisible(false)}>
                              <Text style={styles.canceltext}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.yesbttn} onPress={yesexit}>
                              <Text style={styles.yestext}>Yes</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Modal>
                      {/*Cancel Bttn in BttmSheetMdl*/} 
                      <TouchableOpacity style={styles.cancbttn} onPress={handleCloseModal}>
                        <Text style={styles.canctext}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
              </BottomSheetModal>
          </View>

      </View>

      </View>
      <StatusBar style="auto" />
      
      </View>
      <Toast/>
    </BottomSheetModalProvider>
    
    
  );
}

const styles = StyleSheet.create({/*F0FFFF*/
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    overflow: 'scroll',
  },
  gtext:{
    top: 50,
    left: 30,
    fontWeight: '900', 
    fontSize: 25,
    position: "absolute"
  },
  ytext:{
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    fontSize: 15,
    top: 100,
    marginLeft: "5%",
    marginRight: "5%"
  },
  sizecont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 150,
  },
  stext:{

  },
  sizeinput:{
    width: 100,
    height: 40,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e0e0e0"
  },
  firstcont:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    width: "75%",
    marginTop: 45,
    borderRadius: 5,
    backgroundColor: '#F0F8FF',
    //elevation: 100,
    //shadowColor: "#000"
  },
    qrcont: {
    height: "70%",
    width: "30%",
    paddingLeft: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  qrcodeimg: {
    height: 80,
    width: 80,
    borderRadius: 5
  },
  texts: {
    left: "15%"
  },
  bold:{
    fontWeight: '900',
    color: '#004594',
    fontSize: 12
  },
  small:{
    fontSize: 12
  },
  ellipbttn: {
    backgroundColor: '#004594',
    height: "100%",
    width: 50,
    left: "90%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    //elevation: 20,
    //shadowColor: "#000"
  },
  bttmmodal:{
    //backgroundColor: "gray"
  },
  optiontext:{
      fontSize: 18,
      color: "gray",
      marginLeft: "5%",
      marginTop: "2%"
  },
  dlbttn:{
      top: "5%",
      //backgroundColor: 'green',
      padding: "5%"
  },
  dltext:{
      fontSize: 20,
      fontWeight: '600'
  },
  delbttn:{
      top: "5%",
      padding: "5%",
  },
  deletetext:{
      fontSize: 20,
      fontWeight: '600',
      color: "red"
  },
  modalcont:{
    backgroundColor:"#fff",
    margin: "10%",
    padding: "5%",
    top: "35%",
    borderRadius: 10,
    elevation: 100,
    shadowColor: "black",
    shadowOffset: {  
          width: 100,  
          height: 100,  
        },  
        shadowOpacity: .5,  
        shadowRadius: 5,  
  },
  deltext:{
    color: '#000',
    fontSize: 18
  },
  delbttns:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  cancelbttn:{
    padding: "4%",
    marginTop: '8%',
    width: "30%",
    //backgroundColor: "#1E90FF"
  },
  canceltext:{
    color: '#000',
    fontSize: 18,
    marginLeft: "8%",
    fontWeight: '900'
  },
  yesbttn:{
    padding: "4%",
    marginTop: '8%',
    width: "30%",
    //backgroundColor: "#1E90FF"
  },
  yestext:{
    color: '#b80000',
    fontSize: 18,
    marginLeft: "20%",
    fontWeight: '900'
  },
  cancbttn:{
      top: "5%",
      padding: "5%",
      backgroundColor: ''
  },
  canctext:{
      fontSize: 20,
      fontWeight: '600',
      color: "#1E90FF"
  },
  secondcontainer:{
    height: "100%",
    width: "100%",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  seccont: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    width: "75%",
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: '#F0F8FF',
    //elevation: 100,
    //shadowColor: "#000",
  }
})
