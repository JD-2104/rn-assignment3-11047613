import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Rcontainer = ({ label }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 550,  
      height: 130,
      backgroundColor: '#ffffff', 
      justifyContent: 'center',      
      elevation: 5, 
      borderRadius: 16,
      margin: 8,
      left: 10,
    },
  
    label: {
      position: 'absolute',
      top: 40,
      left: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 3,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#333', 
    }

});

export default Rcontainer;