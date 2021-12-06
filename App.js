/*
Class 80 - ISS TRACKER 4 - METEOR SCREEN 2

GOALS:
● Display the data of meteors using the FlatList in carousel
effect horizontally.
● Advanced styling.

● In this FlatList, we have passed the following 
--keyExtractor 
- a way for FlatList to differentiate different elements from each other, basically a unique key; 

--data 
- the array whose elements we want to render; 

--renderItem 
- a function which defines what exactly needs to be rendered for all the data; 

--horizontal 
- by default, it’s false, but since we want to build a carousel effect (which is always horizontal), 
we kept it as true.

● In a situation where you have an array with 1000 elements, and we want to display all the data in the 
array elements in a similar way. Will you be creating the same element 1000 times? 
----- That’s where "FlatList" comes into play. It takes an array of data and renders all the data similarly. 
In our case, since we have the objects of meteor data structured in a similar way inside an array, 
we can use a FlatList to display the meteor data.

● SPECIAL EFFECTS to let the user know which meteor was most dangerous:
---- We can change the meteor GIF as well as the background based on a threat score. 
The threat score will be a number that represents the severity that this meteor can have.

*/

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native'



import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;