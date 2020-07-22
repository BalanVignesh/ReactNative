import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import Header from '../shared/header';
import ReviewDetailsScreen from '../screens/reviewDetails';

const HomeStack = createStackNavigator();

function App({ navigation }) {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#CFD8DC', height: 60 }, headerTintColor: '#fff' }}>
    {/* <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { }, headerTintColor: '#fff' }}> */}
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <Header title='GameZone' navigation={navigation} /> }} />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetailsScreen} options={{ title: 'Review Details' }} />
    </HomeStack.Navigator>
  );
}

export default App;