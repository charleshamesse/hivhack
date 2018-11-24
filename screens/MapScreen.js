import React from 'react';
import { Platform, Button, TouchableOpacity, Text, View, StyleSheet, TextInput} from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Marker = MapView.Marker;
const API_BASE_URL = 'http://54.37.66.137:1338/';

export default class MapScreen extends React.Component {
    static navigationOptions = {
      title: 'Request',
    };

    state = {
      location: null,
      errorMessage: null,
      distributionCenters: [],
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

    componentDidMount() {
      // Get distribution centers
      axios.get(`${API_BASE_URL}distributioncenters`)
        .then(res => {
          const distributionCenters = res.data;
          console.log(distributionCenters);
          this.setState({ distributionCenters });
        })
    }

    _renderDistributionCenters = () => {
      if(this.state.distributionCenters) {
        return this.state.distributionCenters.map((center, i) => (
          <Marker key={i} title={center.dc_name} coordinate={{
            latitude: center.dc_lat,
            longitude: center.dc_long
          }}>
          <MaterialCommunityIcons name="hospital-marker" size={32} color="red" />
          <MapView.Callout>
            <View>
              <TouchableOpacity
                style={styles.markerButton}
                onPress={() => this.props.navigation.navigate('RequestDetails')}>
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>
        </MapView.Callout>
         </Marker>
        ));
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
              showsUserLocation={true}
              followsUserLocation={true}
              zoomEnabled={true}>
              {this._renderDistributionCenters()}
              </MapView>
          <View 
            style={styles.textView}
          >
          <TextInput
            style={styles.textInput}
          placeholder={`Medical facility..`} />

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
      bottom: 60,
      fontSize: 15,
      right: 30,
      flexDirection: 'row',
    },
    textInput: {
      padding: 10,
      borderRadius: 4,
      flexGrow: 3,
      fontSize: 15,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
    button: {
      padding: 10,
      borderRadius: 4,
      borderColor: 'rgba(150,150,150,0.5)',
      borderLeftWidth: 1,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      backgroundColor: 'rgba(255,255,255,0.9)'
    },
    markerButton: {
      padding: 10,
      borderRadius: 4,
      backgroundColor: 'rgba(255,255,255,0.9)'
    },
    buttonText: {
      fontSize: 15,
    },
    container: {
      position: 'relative',
      flex: 1,
      backgroundColor: '#fff',
    },
  });