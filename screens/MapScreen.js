import React from 'react';
import { Platform, Button, TouchableOpacity, Text, View, StyleSheet, TextInput} from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';


export default class MapScreen extends React.Component {
    static navigationOptions = {
      title: 'Request',
    };

    state = {
      location: null,
      errorMessage: null,
      
    };
  
    componentWillMount() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
          errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
      } else {
        this._getLocationAsync();
      }
    }
  
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
  
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    };


    render() {
      const {navigate} = this.props.navigation;
      
      if(this.state.location) {
        return (
          <View style={styles.container}>  
              <MapView
              style={styles.map}
              initialRegion={{
              latitude: this.state.location.coords.latitude,
              longitude: this.state.location.coords.longitude,
              latitudeDelta: 0.0461,
              longitudeDelta: 0.0210,
              }}
          />
          <View 
            style={styles.textView}
          >
          <TextInput
            style={styles.textInput}
          placeholder={`Pick up location..`} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('RequestDetails')}>
          <Text style={styles.buttonText}>Go</Text>
        </TouchableOpacity>
          </View>
          </View>
        );
          }
          else {
            return (
              <View style={styles.container}>
                <Text>Loading..</Text>
              </View>
            );
          }
    }
  }

  const styles = StyleSheet.create({
    map: {
     flex: 1
    },
    textView: {
      position: 'absolute',
      left: 30,
      top: 30,
      right: 30,
      flexDirection: 'row',
    },
    textInput: {
      padding: 10,
      borderRadius: 4,
      flexGrow: 3,
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
    button: {
      padding: 10,
      borderRadius: 4,
      borderColor: 'rgba(100,100,100,0.5)',
      borderLeftWidth: 1,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: 'rgba(255,255,255,0.8)'
    },
    container: {
      position: 'relative',
      flex: 1,
      backgroundColor: '#fff',
    },
  });