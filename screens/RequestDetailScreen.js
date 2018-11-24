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
      title: 'Request Detail',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text>Yooow</Text>
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

    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  