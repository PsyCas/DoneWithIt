import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';

import colors from '../config/colors';

const bg = require('../assets/background.jpg');  
const logo = require('../assets/logo-red.png');  

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={bg}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}/>
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: "100%",
    height: 70, 
    backgroundColor: colors.primary
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: 70,
  },
  logo: {
    height: 100,
    width: 100
  },
  registerButton: {
    width: "100%",
    height: 70, 
    backgroundColor: colors.secondary
  },
})


export default WelcomeScreen;