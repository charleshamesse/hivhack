import React from 'react';
import {Button, NavigatorIOS, Text, View} from 'react-native';

export default class MapScreen extends React.Component {
    static navigationOptions = {
      title: 'Map',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View>
              <Text>Yo</Text>
        <Button
          title="Go back to home"
          onPress={() => navigate('Home', {name: 'Jane'})}
        />
        </View>
      );
    }
  }