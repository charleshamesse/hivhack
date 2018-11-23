import React from 'react';
import { Platform, Button, NavigatorIOS, Text, View, StyleSheet} from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';


export default class MapScreen extends React.Component {
    static navigationOptions = {
      title: 'Map',
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
      return (
          <View style={styles.container}>
            <MapView
            style={{ flex: 1 }}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });