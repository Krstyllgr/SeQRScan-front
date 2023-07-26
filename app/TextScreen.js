import React from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';

import ScanScreen from '../app/ScanScreen';

const TextScreen = ({navigation }) => {
    return(
        <View style={styles.container}>
          <Text style={styles.stext}>Scan Result</Text>
          <Image style={styles.qrcont} source={require('../assets/images/qrcode.png')}></Image>
          {/*Card Content*/}
          <View style={styles.contentbox}>
            <Text style={styles.ctext}>Content:</Text>
            <Text style={styles.message}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatum harum vero assumenda minima nam adipisci delectus dolor omnis labore mollitia reprehenderit enim voluptatem magnam accusantium perspiciatis, deleniti voluptates quas?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatum harum vero assumenda minima nam adipisci delectus dolor omnis labore mollitia reprehenderit enim voluptatem magnam accusantium perspiciatis, deleniti voluptates quas?
            </Text>
          </View>
          <View style={styles.bckbtn}>
          {/*Back Button*/}
          <TouchableOpacity onPress={() => navigation.navigate(ScanScreen)}  style={styles.backbttn}>
            <Text style={styles.btext}>Back</Text>
          </TouchableOpacity>
          </View>
          </View>
    )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    height: "100%",
    alignItems: "center",
    overflow: 'scroll',
  },
  stext:{
    fontSize: 40,
    top: 50,
    left: 30,
    color: "#004594",
    position: "absolute"
  },
  qrcont: {
    height: 180,
    width: 180,
    top: "18%",
  },
  contentbox: {
    display: "flex",
    height: "40%",
    width: "75%",
    top: "22%",
    minHeight: "40%",
    padding: "3%",
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 10,
    shadowColor: "#000",
    borderColor: "gray",
    borderWidth: 0.5
  },
  ctext:{
    fontSize: 20,
    fontWeight: '900',
    color: "#004594"
  },
  message:{
    fontSize: 17,
    top: "3%", 
    textAlign: 'justify',
    overflow: "scroll"//or hidden
  },
  bckbtn:{
    width: "100%",
    alignItems: "center",
    top: 120
  },
  backbttn: {
    top: 100,
    backgroundColor: '#00BF63',
    padding: 12,
    width: 350,
    height: 50,
    alignItems: 'center',
    borderRadius: 8,
  },
  btext:{
    fontSize: 18,
  }
})

export default TextScreen;