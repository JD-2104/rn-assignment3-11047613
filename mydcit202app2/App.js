import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Button, Pressable, StyleSheet, ScrollView, Image, TextInput, Text, View, FlatList } from 'react-native';
import Scontainer from './Components/Scontainer';
import Rcontainer from './Components/Rcontainer'

const verticalData = [
  { key: '1', label: 'Mobile App Development' },
  { key: '2', label: 'Web Development' },
  { key: '3', label: 'Frontend Development' },
  { key: '4', label: 'Mathematics' },
  { key: '5', label: 'Data Structures' },
  { key: '6', label: 'Networking' },
  { key: '7', label: 'Cloud Computing' },
  { key: '8', label: 'Machine Learning' },
  { key: '9', label: 'Data Science' },
  { key: '10', label: 'Data Mining' },
  { key: '11', label: 'Embedded Systems' },
  { key: '12', label: 'Digital & Logical Systems' },
  { key: '13', label: 'Critical Thinking' },
  { key: '14', label: 'Algorithms' },
  { key: '15', label: 'System Administration' },
];

const horizontalData = [
  { key: '1', imageUrl: require("./assets/images/pic1.jpg"), label: 'Exercise', minilabel: '12 Tasks' },
  { key: '2', imageUrl: require("./assets/images/pic2.jpg"), label: 'Study', minilabel: '12 Tasks' },
  { key: '3', imageUrl: require("./assets/images/pic1.jpg"), label: 'Cook', minilabel: '12 Tasks' },
  { key: '4', imageUrl: require("./assets/images/pic2.jpg"), label: 'Code', minilabel: '12 Tasks' },
  { key: '5', imageUrl: require("./assets/images/pic1.jpg"), label: 'Eat', minilabel: '12 Tasks' },
  { key: '6', imageUrl: require("./assets/images/pic2.jpg"), label: 'Party', minilabel: '12 Tasks' },
  { key: '7', imageUrl: require("./assets/images/pic1.jpg"), label: 'Teach', minilabel: '12 Tasks' },
  { key: '8', imageUrl: require("./assets/images/pic2.jpg"), label: 'Sleep', minilabel: '12 Tasks' },
];

const ProfileImage = require("./assets/images/profile.png");
const FilterImage = require("./assets/images/filter.png");


const handleFilterPress = () => {
  alert('Filter button pressed.\nCannot use button component for android to render images through expo go');
};


const handleButtonPress = () => {
  alert('Button can only be rendered using string (for android using expo)\nThank you for your time')
}

const App =() => {

  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto" />
    <ScrollView>

    <View style={{marginBottom: 20, marginTop: 60, flexDirection: 'row',}}>
      
      <View>
      <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 30,}}>Hello, Devs</Text>
      <Text style={{fontsize: 8, marginLeft: 30,}}>14 tasks today</Text>
      </View> 

      <Image source={ProfileImage} style={{borderRadius: 50, marginVertical: 10, width: 60, height: 60, backgroundColor: "white", marginLeft: 140,}} />

      
    </View>

    <View style={{flexDirection: 'row', marginLeft: 18,}}>
      
      <View style={{backgroundColor: "white", width: 280, height: 47, marginLeft: 10, borderRadius: 10, top: 3,}}>
        
       <TextInput placeholder='Search' placeholderTextColor='#999' style={{backgroundColor: "white", width: 150, height: 40, borderRadius: 10, marginLeft: 45, }} /> 
      </View>

      <Pressable onPress={handleFilterPress}>
      <Image source={FilterImage} style={{height: 50, width: 50, marginLeft: 18, }} /> 
      </Pressable>

    </View>

    <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 30, marginTop: 20, marginBottom: 20,}}>Categories</Text>
    
    <FlatList
          horizontal
          data={horizontalData}
          renderItem={({ item }) => (
            <Scontainer
              imageUrl={item.imageUrl}
              label={item.label}
              minilabel={item.minilabel}
            />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{alignItems: 'center', paddingLeft: 20,}}
          showsHorizontalScrollIndicator={false}
        />

      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 30, marginTop: 20, marginBottom: 10,}}>Ongoing Task</Text>
        
        <FlatList
            data={verticalData}
            renderItem={({ item }) => (
              <Rcontainer
                label={item.label}
              />
            )}
            keyExtractor={(item) => item.key}
            style={{flexGrow: 0, marginLeft: 10,}}
          />
      </View>

      <Button title='Test'onPress={handleButtonPress} style={{height: 20, marginTop: 20,}}/>

    </ScrollView>
    </View>
    </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
  },

});

export default App;