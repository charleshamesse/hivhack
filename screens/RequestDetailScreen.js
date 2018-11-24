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
  Picker,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants, Location, Permissions, MapView } from 'expo';


const Marker = MapView.Marker;
export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Request Detail',
    };

    state = {
      drugType: 'HIV-1'
    };

    _centerMarker = () => {
      const center = this.props.navigation.state.params.distributionCenter;
      return (
      <Marker key={0} title={center.dc_name} coordinate={{
        latitude: center.dc_lat,
        longitude: center.dc_long
      }}>
      <MaterialCommunityIcons name="hospital-marker" size={32} color="red" />
      <View style={styles.markerName}>
        <Text>{center.dc_name}</Text>
        </View>
     </Marker>);
    }

    render() {
      const {navigate} = this.props.navigation;
      const center = this.props.navigation.state.params.distributionCenter;
      return (
        <View style={styles.container}>
          <MapView
              style={styles.map}
              initialRegion={{
              latitude: center.dc_lat-0.023,
              longitude: center.dc_long,
              latitudeDelta: 0.0921,
              longitudeDelta: 0.0420,
              }}
              zoomEnabled={true}>
                {this._centerMarker()}
          </MapView>

          
          <View style={styles.bottom}>

            <Text style={styles.bottomHeader}>Order details</Text>

            <View style={styles.bottomInputGroup}>
              <View style={styles.bottomInputGroupWrapper}>
                <Picker style={styles.bottomInput}>
                  <Picker.Item label="Symtuza" value="HIV-1" />
                  <Picker.Item label="Rezolsta" value="HIV-2" />
                  <Picker.Item label="Edurant" value="HIV-3" />
                  <Picker.Item label="Intelence" value="HIV-4" />
                  <Picker.Item label="Prezista" value="HIV-5" />
                </Picker>
              </View>
              <View style={styles.bottomInputGroupWrapper}>
                <Picker style={styles.bottomInput}>
                  <Picker.Item label="1" value="HIV-1" />
                  <Picker.Item label="2" value="HIV-2" />
                  <Picker.Item label="3" value="HIV-3" />
                  <Picker.Item label="4" value="HIV-4" />
                  <Picker.Item label="5" value="HIV-5" />
                </Picker>
              </View>
            </View>
          
            <TouchableOpacity 
                style={styles.bottomConfirm}>
                <Text style={styles.buttonConfirmText}>Confirm order</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({

    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    map: {
     flex: 1,
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
    },
    bottom: {
      position: 'absolute',
      left: 30,
      right: 30,
      bottom: 30,
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius: 4,
      alignItems: 'center',
      height: '50%',
    },
    bottomHeader: {
      margin: 10,
      fontSize: 30,
      fontWeight: 'bold',
    },
    bottomInputGroup: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
    },
    bottomInputLabels: {
    },
    bottomLabel: {
    },
    bottomInput: {
    },
    bottomInputGroupWrapper: {
      flex: 1,
      margin: 5,
    },
    markerName: {
      backgroundColor: 'rgba(255,255,255, 0.8)',
      padding: 10,
      borderRadius: 4,
    },
    bottomConfirm: {
      backgroundColor: '#111',
      marginTop: 10,
      borderRadius: 4,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      margin: 10,
    },
    buttonConfirmText: {
      color: '#fff',
    }
  });
  