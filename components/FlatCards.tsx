import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FlatCards extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={[styles.box, styles.redBox]}>
            <Text style={styles.headingText}>Red</Text>
          </View>
          <View style={[styles.box, styles.greenBox]}>
            <Text style={styles.headingText}>Green</Text>
          </View>
          <View style={[styles.box, styles.blueBox]}>
            <Text style={styles.headingText}>Blue</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 8,
  },
  box: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  headingText: {
    color: '#f6f0f0ff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  redBox: {
    backgroundColor: '#FF0000',
  },
  greenBox: {
    backgroundColor: '#3a540aff',
  },
  blueBox: {
    backgroundColor: '#26329bff',
  },
});
