import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/components/Home/Home';
import Navigator from './src/parts/navigator/Navigator';

export default function App() {
  return (
    <ScrollView>
      <NavigationContainer>
        <StatusBar style="auto" />
        <View style={{ backgroundColor: '#F4F4F4' }}>
          <Home />
          <Navigator />
        </View>
      </NavigationContainer>
    </ScrollView>
  );
}
