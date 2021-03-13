import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  CardTitle,
  BlueCardsContainer,
  BlueCard,
  CardTitleIn,
  CardSubtitle,
} from '../../../../styles/HomeStyles';

function Alerts() {
  return (
    <View>
      <CardTitle>Alerts</CardTitle>
      <BlueCardsContainer>
        <TouchableOpacity>
          <BlueCard>
            <CardTitleIn>Daily reminder</CardTitleIn>
            <CardSubtitle>[School Name] request a physical form</CardSubtitle>
          </BlueCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <BlueCard>
            <CardTitleIn>Upcoming vaccine</CardTitleIn>
            <CardSubtitle>Schedule a covid vaccination</CardSubtitle>
          </BlueCard>
        </TouchableOpacity>
      </BlueCardsContainer>
    </View>
  );
}

export default Alerts;
