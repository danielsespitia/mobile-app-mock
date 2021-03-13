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
              <CardIcon source={require('../../../../assets/immunization.png')} />
              <WhiteCardTitle>Immunization</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/allergies.png')} />
              <WhiteCardTitle>Allergies</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/vitals.png')} />
              <WhiteCardTitle>Vitals</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/forms.png')} />
              <WhiteCardTitle>Forms</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('../../../../assets/health-records.png')} />
              <WhiteCardTitle>Add health records</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
      </WhiteCardsContainer>
    </View>
  );
}

export default MySmartRecord;