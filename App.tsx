import React from 'react';
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
 } from '@expo-google-fonts/jost'
 import AppLoading from 'expo-app-loading'

import RoutesStack from './src/routes/index';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,Jost_400Regular
  })

  if(!fontsLoaded) return <AppLoading/>

  return <RoutesStack/>
}


