import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const AppIntro = styled.View`
  justify-content: center;
  background-color: #4282f4;
  height: 380px;
  width: 100%;
  position: absolute;
`;

const Title = styled.Text`
  margin-left: auto;
  margin-right: auto;
  font-size: 42px;
  font-weight: bold;
  color: white;
`;

const Subtitle = styled.Text`
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  color: white;
  opacity: 0.7;
`;

const ProfilePicture = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 100;
  margin-top: 300px;
  margin-left: auto;
  margin-right: auto;
`;

const Username = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const CardTitle = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 450;
`;

const BlueCardsContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-around;
`;

const BlueCard = styled.View`
  height: 110px;
  width: 220px;
  justify-content: center;
  background-color: #4282f4;
  border-radius: 30px;
`;

const CardTitleIn = styled.Text`
  font-weight: 500;
  font-size: 17px;
  margin-left: 20px;
  color: white;
`;

const CardSubtitle = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;
  color: white;
  opacity: 0.7;
`;

const WhiteCardsContainer = styled.View`
  justify-content: space-around;
  flex-flow: row wrap;
`;

const WhiteCard = styled.View`
  background-color: white;
  height: 150px;
  margin-top: 20px;
  width: 220px;
  border-radius: 20%;
`;

const WhiteCardInfo = styled.View`
  align-items: center;
  margin: auto;
`;

const CardIcon = styled.Image`
  border-radius: 50px;
  height: 70px;
  width: 70px;
`;

const WhiteCardTitle = styled.Text`
  font-size: 17px;
  margin-top: 5px;
`;

export default function App() {
  return (
    <View style={{ backgroundColor: '#F4F4F4' }}>
      <AppIntro>
        <Title>WellUp</Title>
        <Subtitle>Connecting better health</Subtitle>
      </AppIntro>
      <ProfilePicture
        source={{
          uri:
            'http://alohahotelpalmsprings.com/template/imgs/testimonial-1.jpg',
        }}
      />
      <Username>User Name</Username>
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
      <CardTitle>My smart record</CardTitle>
      <WhiteCardsContainer>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('./assets/covid-icon.png')} />
              <WhiteCardTitle>Covid vaccination</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('./assets/immunization.jpg')} />
              <WhiteCardTitle>Immunization</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('./assets/allergies.jpg')} />
              <WhiteCardTitle>Allergies</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('./assets/vitals.jpg')} />
              <WhiteCardTitle>Vitals</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('./assets/forms.jpg')} />
              <WhiteCardTitle>Forms</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <WhiteCard style={styles.whitecard}>
            <WhiteCardInfo>
              <CardIcon source={require('./assets/health-records.jpg')} />
              <WhiteCardTitle>Add health records</WhiteCardTitle>
            </WhiteCardInfo>
          </WhiteCard>
        </TouchableOpacity>
      </WhiteCardsContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  whitecard: {
    shadowColor: '#cdcdcd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});
