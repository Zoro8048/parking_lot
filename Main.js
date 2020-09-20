import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SelectVehicle from './screens/SelectVehicle';
import BikeSlot from './screens/BikeSlot';
import CarSlot from './screens/CarSlot';

const Stack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="VehicleSelect">
          {(props) => <SelectVehicle {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Bike">
          {(props) => <BikeSlot {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Car">
          {(props) => <CarSlot {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
