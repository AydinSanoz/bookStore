import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Main} from './pages';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const likeIcon = <Icon name="favorite-border" size={30} color="#300" />;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === "Like/Favorites") {
              iconName = focused ? 'favorite' : 'favorite-border';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home-filled' : 'home';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="Like/Favorites" component={HomeScreen} />
        {/* <Tab.Screen name="Like" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
