import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Platform,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 85,
    height: 80,
  },
});

function showAlert(message) {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello There...!!</Text>
        <Text>Hello There...!!</Text>
        <Text>Hello There...!!</Text>
        <Text>Hello There...!!</Text>
        <Text>Hello There...!!</Text>
        <Text>Hello There...!!</Text>
        <Text>Hello There...!!</Text>
        <Text>Hello There...!!</Text>
        <Text>Hello There...!!</Text>
      </View>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj0r68jZH4eo3fYSF4w2kuacrnLWu69OP644HsnhNkw&s=10',
          }}
        ></Image>
      </View>
      <Button
        title="Press me"
        onPress={() => showAlert('Button Pressed')}
      ></Button>
    </SafeAreaView>
  );
}

export default App;
