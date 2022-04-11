import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const x = 1;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World! This is a test of the thingy</Text>
      <Text style={styles.text}>I will now test multiple lines of this thing.</Text>
      <Text style={styles.text}>This is the third line.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#fff"
  }
});
