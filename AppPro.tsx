import React, { JSX } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  useColorScheme,
  Alert,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  ligh: {
    color: '#333',
    backgroundColor: '#fff',
  },

  Dark: {
    color: '#fff',
    backgroundColor: '#333',
  },
});

function theme(message) {
  Alert.alert(message);
}

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.Dark : styles.ligh}>
          Hello thereeee...
        </Text>

        <Button
          title="change theme"
          onPress={() => theme('Alert Clicked')}
        ></Button>
      </View>
    </>
  );
}

export default AppPro;
