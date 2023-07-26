import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import {SvgUri} from 'react-native-svg';

import Login from '../app/Login';

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.acctext}>Account</Text>

      <View style={styles.card}>
          <Icon name="person-circle-outline" size={130} color="#25C196" style={styles.person}/>
          <Text style={styles.ntext}>Kristyl Axlee A. Alegre</Text>
          <Text style={styles.gtext}><Icon name="mail-outline" size={18} color="#25C196"/>kristylaxleealegre0326@gmail.com</Text>
          <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate(Login)}>
            <Icon name="log-out-outline" size={20} color="#fff" style={{ marginRight: 5}}/>
            <Text style={styles.lbttn}>LOGOUT</Text>
          </TouchableOpacity>
      </View>
      
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCFFE5",
    alignItems: "center"
  },
  acctext:{
    color: "#000",
    top: 60,
    left: 30,
    position: "absolute",
    fontSize: 25,
    fontWeight: "900"
  },
  card: {
    top: "25%",
    height: 400,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius:5,
    alignItems: "center",
    elevation: 20,
    shadowColor: "#000"
  },
  person: {
    top: 20
  },
  ntext: {
    fontSize: 25,
    color: "#000",
    top: 20,
    textAlign: "center"
  },
  gtext: {
    fontSize:  15,
    color: "rgb(95, 95, 95)",
    top: 50,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E90FF",
    top: 100,
    borderRadius: 5,
    width: 150,
    height: "12%"
  },
  lbttn: {
    fontSize: 18,
    color: "#fff"
  }
}
)
