import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Rcontainer from './Components/Rcontainer';
import Scontainer from './Components/Scontainer';

export default function App() {
  return (
    <>
     <View style={{ flex: 1, backgroundColor: '#f7f0e8' }}>
      <View>
      <Text style={{ width: 180, height: 37, top: 19, fontWeight: 700, fontSize: 32, lineHeight: 38.4, left: 20 }}>Hello, Devs</Text>

      <Text style={{ width: 77, height: 13, top: 29, fontSize: 12, fontWeight: 500, lineHeight: 14.4, left: 20 }}>14 tasks today</Text>
      <StatusBar style="auto" />
      </View>
    <Scontainer
    label="EXERCISE"
    imageUrl="./assets/images/pic1.jpg"/>

    <Scontainer
    label="EXERCISE"
    imageUrl="./assets/images/pic1.jpg"/>

    <Scontainer
    label="EXERCISE"
    imageUrl="./assets/images/pic1.jpg"/>
    
      </View>
    </>
   
    

  );
}






