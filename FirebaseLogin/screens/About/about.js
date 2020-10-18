import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Card, CardItem,
  Thumbnail, Text,
   Button, Left, Body } from 'native-base';

export default class About extends Component {
  // static navigationOptions = { header: null }

  render() {
    return (
      <Container>
        <Header transparent />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/logobox.png')} />
                <Body>
                  <Text>HealthBoxes</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../../assets/black-doctor.jpg')} style={{ height: 200, width: 200, flex: 1 }} />
                <Text>
                  Healthboxes is a comprehensive health care support service with
                   a primary focus on providing convenient
                   and affordable access to experienced healthcare professionals
                    and lifestyle support in and around Nigeria. Through this easy access to health professionals and lifestyle support – clinics, hospitals, pharmacies, care agencies – Healthboxes’ solution is positioned to help bridge the gap in healthcare service delivery. We are proud to work with healthcare leaders who share our passion for building, harnessing, and advancing solutions to empower the reinvention of healthcare.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
