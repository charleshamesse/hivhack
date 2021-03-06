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
      title: 'Skyler',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('RequestDetail')}>
          <Text style={styles.buttonText}>I deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('RequestMap')}>
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
  