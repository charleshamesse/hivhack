import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        Map: {screen: MapScreen}
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);