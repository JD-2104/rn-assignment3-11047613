import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput, Image } from 'react-native';
import Rcontainer from './Components/Rcontainer';
import Scontainer from './Components/Scontainer';

export default function App() {
  return (
    <>
     <View style={{ flex: 1, backgroundColor: '#f7f0e8' }}>
      <View>
      <Text style={{ width: 180, height: 37, top: 49, fontWeight: 700, fontSize: 32, lineHeight: 38.4, left: 20 }}>Hello, Devs</Text>

      <Text style={{ width: 85, height: 13, top: 59, fontSize: 12, fontWeight: 500, lineHeight: 14.4, left: 20 }}>14 tasks today</Text>

      <TextInput style={{borderColor: "white"}}/>
      <StatusBar style="auto" />
      </View>
      <Text style={{fontSize: 24, fontWeight: 'bold', top: 90, left: 20}}>Categoris</Text>
    <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row', left: 5}}>
        <Scontainer
         imageUrl="./assets/images/pic1.jpg"
          label="Bat"
          minilabel="12 Tasks" />
        <Scontainer
         imageUrl="./assets/images/pic1.jpg"
          label="Study"
          minilabel="12 Tasks" />
        <Scontainer
         imageUrl="./assets/images/pic1.jpg"
          label="Test"
          minilabel="12 Tasks" />
        <Scontainer
         imageUrl="./assets/images/pic1.jpg"
          label="Hello"
          minilabel="12 Tasks" />
        <Scontainer
         imageUrl="./assets/images/pic1.jpg"
          label="Test"
          minilabel="12 Tasks" />
        <Scontainer
         imageUrl="./assets/images/pic1.jpg"
          label="Study"
          minilabel="12 Tasks" />
      </ScrollView>
      <View>
        <Text style={{left: 20}}>Ongoing Task</Text>
        <FlatList
            data={[{ key: '1', label: 'Mobile App Development' }]}
            renderItem={({ item }) => (
              <Rcontainer
                label={item.label}
              />
              
            )}
            keyExtractor={(item) => item.key}
          />
          
      </View>
    </View>
      </>

    // <Scontainer
    // label="EXERCISE"
    // imageUrl="./assets/images/pic1.jpg"/>

    // <Scontainer
    // label="EXERCISE"
    // imageUrl="./assets/images/pic1.jpg"/>

    // <Scontainer
    // label="EXERCISE"
    // imageUrl="./assets/images/pic1.jpg"/>
    
    //   </View>
    // </>
   
    

  );
}












