import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  AppIntro,
  Title,
  Subtitle,
  ProfilePictureContainer,
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
      </ProfilePictureContainer>
      <Username>User Name</Username>
    </View>
  );
}

export default HomeHeader;
