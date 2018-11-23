import React from 'react';
import { AppLoading, Asset, Font, Icon, Link } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});
