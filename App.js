import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center', // primary axis
        alignItems: 'center', //secondary axis
      }}
    >
      <View
        style={{
          backgroundColor: "rebeccapurple",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
