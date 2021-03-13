import React from 'react';
import { View } from 'react-native';

import HomeHeader from '../Home/children/HomeHeader';
import Alerts from '../Home/children/Alerts';
import MySmartRecord from '../Home/children/MySmartRecord';
import ImmunizationTracker from '../Home/children/ImmunizationTracker';

function Home() {
  return (
    <View>
      <HomeHeader />
      <Alerts />
      <MySmartRecord />
      <ImmunizationTracker />
    </View>
  );
}

export default Home;
