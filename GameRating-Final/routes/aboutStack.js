import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import AboutScreen from '../screens/about';

const HomeStack = createStackNavigator();

function App({ navigation }) {
    return (
        <HomeStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#CFD8DC', height: 60 }, headerTintColor: '#fff' }}>
            <HomeStack.Screen name="About" component={AboutScreen} options={{ headerTitle: () => <Header title='GameZone' navigation={navigation} /> }} />
        </HomeStack.Navigator>
    );
}

export default App;