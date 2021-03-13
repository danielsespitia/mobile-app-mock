import React from 'react';
import { View } from 'react-native';
import {
  CardTitle,
  MainSubtitle,
  Graph,
} from '../../../../styles/HomeStyles';

function ImmunizationTracker() {
  return (
    <View>
      <CardTitle>Immunization tracker</CardTitle>
      <MainSubtitle>
        Your immunization tracker is currently empty. Add your records to
        complete your child's profile
      </MainSubtitle>
      <Graph source={require('../../../../assets/graph.png')} />
    </View>
  );
}

export default ImmunizationTracker;
