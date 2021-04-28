
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../styles/colors';
import Welcome from '../pages/Welcome';
import UserIdentity from '../pages/UserIdentity';
import Confirmation from '../pages/Confirmation';
import PlantSelect from '../pages/PlantSelect';
import PlantSave from '../pages/PlantSave';
import MyPlants from '../pages/MyPlants';
import AuthRoutes from './tab.routes';


const Stack = createStackNavigator();

const AppRoutes:React.FC = ()=> (

      <Stack.Navigator
      headerMode='none'
      
      screenOptions={{cardStyle:{backgroundColor:colors.white}}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="UserIdentity" component={UserIdentity} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="PlantSelect" component={AuthRoutes} />
        <Stack.Screen name="PlantSave" component={PlantSave} />
        <Stack.Screen name="MyPlants" component={AuthRoutes} />
      </Stack.Navigator>

)

export default AppRoutes;