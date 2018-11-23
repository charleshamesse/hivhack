import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'The Blabla-Car App for HIV',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Map')}>
          <Text style={styles.buttonText}>I deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.buttonText}>I request</Text>
        </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#eee',
      padding: 10,
      borderRadius: 4,
      color: '#111',
      margin: 10,
      width: '80%',
      alignItems: 'center'
    },
    buttonText: {
      fontSize: 30,
      color: '#333'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  