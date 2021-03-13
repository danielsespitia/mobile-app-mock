import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  CardTitle,
  WhiteCardsContainer,
  WhiteCard,
  WhiteCardInfo,
  CardIcon,
  WhiteCardTitle,
  styles,
} from '../../../../styles/HomeStyles';

function MySmartRecord(
  
) {
  return (
    <View>
      <CardTitle>My smart record</CardTitle>
      <WhiteCardsContainer>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/covid-icon.png')} />
              <WhiteCardTitle>Covid vaccination</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/immunization.jpg')} />
              <WhiteCardTitle>Immunization</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/allergies.jpg')} />
              <WhiteCardTitle>Allergies</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/vitals.jpg')} />
              <WhiteCardTitle>Vitals</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/forms.jpg')} />
              <WhiteCardTitle>Forms</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/health-records.jpg')} />
              <WhiteCardTitle>Add health records</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
      </WhiteCardsContainer>
    </View>
  );
}

export default MySmartRecord;