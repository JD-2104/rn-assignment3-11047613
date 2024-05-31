import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#f7f0e8'}}>
      <Text style={{width: 180, height: 37, top: 19, fontWeight: 700, fontSize: 32, lineHeight: 38.4, left: 20}}><b>Hello , Devs</b></Text>

      <Text style={{width: 77, height: 13, top: 29, fontWeight: 500, fontSize: 12, lineHeight: 14.4, left: 20}}>14 task today</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7f0e8',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: 'Lato',
//     fontWeight: 700,
//     fontSize: 20,
//     lineHeight: 24,
//   },
// });
