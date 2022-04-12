import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

const chairImage = require('../assets/chair.jpg');


function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}/>
      <View style={styles.deleteIcon}/>
      <Image
        resizeMode='contain'
        source={chairImage}
        style={styles.chairImage}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
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