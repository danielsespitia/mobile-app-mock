import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const AppIntro = styled.View`
  justify-content: center;
  background-color: #4282f4;
  height: 380px;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
  align-self: center;
  width: 50%;
  position: absolute;
  transform: scaleX(2);
`;

export const Title = styled.Text`
  margin-left: auto;
  margin-right: auto;
  font-size: 42px;
  font-weight: bold;
  color: white;
  transform: scaleX(0.5);
`;

export const Subtitle = styled.Text`
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  color: white;
  opacity: 0.7;
  transform: scaleX(0.5);
`;

export const ProfilePictureContainer = styled.View``;

export const ProfilePicture = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-top: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProfilePictureUpload = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  margin-left: 250px;
  margin-top: -40px;
`;

export const Username = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const CardTitle = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 400;
`;

export const MainSubtitle = styled.Text`
  text-align: center;
  align-self: center;
  width: 70%;
  margin-top: 35px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 400;
  opacity: 0.5;
`;

export const BlueCardsContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-around;
`;

export const BlueCard = styled.View`
  height: 110px;
  width: 195px;
  justify-content: center;
  background-color: #4282f4;
  border-radius: 30px;
`;

export const CardTitleIn = styled.Text`
  font-weight: 500;
  font-size: 17px;
  margin-left: 20px;
  color: white;
`;

export const CardSubtitle = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  margin-left: 20px;
  color: white;
  opacity: 0.7;
`;

export const WhiteCardsContainer = styled.View`
  justify-content: space-around;
  flex-flow: row wrap;
`;

export const WhiteCard = styled.View`
  background-color: white;
  height: 150px;
  margin-top: 20px;
  width: 195px;
  border-radius: 20px;
`;

export const WhiteCardInfo = styled.View`
  align-items: center;
  margin: auto;
`;

export const CardIcon = styled.Image`
  border-radius: 50px;
  height: 70px;
  width: 70px;
`;

export const WhiteCardTitle = styled.Text`
  font-size: 17px;
  margin-top: 5px;
`;

export const Graph = styled.Image`
  align-self: center;
  margin-top: 70px;
  margin-bottom: 220px;
  height: 180px;
  width: 180px;
`;

export const styles = StyleSheet.create({
  whitecard: {
    shadowColor: '#cdcdcd',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});
