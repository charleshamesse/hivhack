import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../screens/HomeScreen';
import RequestMapScreen from '../screens/RequestMapScreen';
import RequestDetailScreen from '../screens/RequestDetailScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {screen: HomeScreen},
        RequestMap: {screen: RequestMapScreen},
        RequestDetail: {screen: RequestDetailScreen},
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);