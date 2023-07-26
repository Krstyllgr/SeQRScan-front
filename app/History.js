import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.histext}>History</Text>
      <View style={styles.firstcont}>
        <View style={styles.icont}>
          <Icon name="person-circle-outline" size={50} color="#004594" style={{ marginTop: 5, marginLeft: 15, marginRight: 15}}/>
        </View>
        <View style={styles.texts}>
          <Text style={styles.scan}>You Scanned</Text>
          <Text style={styles.url}>https://www.facebook.com</Text>
        </View>
        <View style={styles.tandd}>
          <Text style={styles.date}>07/11/23</Text>
          <Text style={styles.time}>9:00 pm</Text>
        </View>
      </View>

      <View style={styles.seccont}>
        <View style={styles.icont}>
          <Icon name="person-circle-outline" size={50} color="#004594" style={{ marginTop: 5, marginLeft: 15, marginRight: 15}}/>
        </View>
        <View style={styles.texts}>
          <Text style={styles.scan}>You Scanned</Text>
          <Text style={styles.url}>https://www.facebook.com</Text>
        </View>
        <View style={styles.tandd}>
          <Text style={styles.date}>07/11/23</Text>
          <Text style={styles.time}>9:00 pm</Text>
        </View>
      </View>

      <View style={styles.seccont}>
        <View style={styles.icont}>
          <Icon name="person-circle-outline" size={50} color="#004594" style={{ marginTop: 5, marginLeft: 15, marginRight: 15}}/>
        </View>
        <View style={styles.texts}>
          <Text style={styles.scan}>You Scanned</Text>
          <Text style={styles.url}>https://www.facebook.com</Text>
        </View>
        <View style={styles.tandd}>
          <Text style={styles.date}>07/11/23</Text>
          <Text style={styles.time}>9:00 pm</Text>
        </View>
      </View>

      <View style={styles.seccont}>
        <View style={styles.icont}>
          <Icon name="person-circle-outline" size={50} color="#004594" style={{ marginTop: 5, marginLeft: 15, marginRight: 15}}/>
        </View>
        <View style={styles.texts}>
          <Text style={styles.scan}>You Scanned</Text>
          <Text style={styles.url}>https://www.facebook.com</Text>
        </View>
        <View style={styles.tandd}>
          <Text style={styles.date}>07/11/23</Text>
          <Text style={styles.time}>9:00 pm</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: "100%",
    alignItems: "center",
    overflow: "scroll"
  },
  histext:{
    color: "#000",
    top: 60,
    left: 30,
    position: "absolute",
    fontSize: 25,
    fontWeight: '900'
  },
  firstcont:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: "90%",
    marginTop: 110,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: "#000"
  },
  icont:{

  },
  texts:{

  },
  scan: {
    fontWeight: '900'
  },
  url: {
    color: '#004594'
  },
  tandd: {
    left: "85%",
    position: "absolute"
  },
  date:{

  },
  time:{

  },
  seccont: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: "90%",
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: "#000"
  },


});
