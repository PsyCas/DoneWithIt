import React from 'react';
import { Image, StyleSheet, View, Button, Alert } from 'react-native';

import colors from '../config/colors';

const chairImage = require('../assets/chair.jpg');


function ViewImageScreen(props) {

  const alertFunction = () => {
    Alert.alert("Hey Dummy Look Here", "Is this a test?", [
      {text: "Yes", onPress: ()=>{alert("Nice test mate")}},
      {text: "No", onPress: ()=>{alert("Huh... then what is it?")}}
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Click Me First" onPress={alertFunction} color={colors.primary}/>
        <Button title="Click Me After" onPress={alertFunction} color={colors.secondary}/>
      </View>
      <Image
        resizeMode='contain'
        source={chairImage}
        style={styles.chairImage}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25
  },  
  chairImage: {
    width: "100%",
    height: "100%",
  },
  closeIcon:{
    position: 'absolute',
    top: 40,
    left: 30,
    backgroundColor: colors.primary,
    height: 50,
    width: 50
  },
  container:{
    backgroundColor: "#000",
    flex: 1  
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
    backgroundColor: colors.secondary,
    height: 50,
    width: 50
  }
})

export default ViewImageScreen;