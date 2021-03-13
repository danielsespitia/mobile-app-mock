import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  AppIntro,
  Title,
  Subtitle,
  ProfilePictureContainer,
  ProfilePictureButtonContainer,
  ProfilePicture,
  ProfilePictureUpload,
  Username,
} from '../../../../styles/HomeStyles';

function HomeHeader() {
  return (
    <View>
      <AppIntro>
        <Title>WellUp</Title>
        <Subtitle>Connecting better health</Subtitle>
      </AppIntro>
      <ProfilePictureContainer>
        <ProfilePictureButtonContainer>
          <ProfilePicture
            source={{
              uri:
                'http://alohahotelpalmsprings.com/template/imgs/testimonial-1.jpg',
            }}
          />
          <TouchableOpacity>
            <ProfilePictureUpload
              source={require('../../../../assets/photoicon.png')}
            />
          </TouchableOpacity>
        </ProfilePictureButtonContainer>
      </ProfilePictureContainer>
      <Username>User Name</Username>
    </View>
  );
}

export default HomeHeader;
