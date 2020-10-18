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

export default class ShopContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'SHOP',
    tabBarIcon: ({ tintColor }) => (
      <Icon
      name="ios-pricetags"
      size={25}
      color={tintColor}
      />
    ),
  };

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
                <Image source={require('../../assets/ComingSoon.jpg')} style={{ height: 200, width: 200, flex: 1 }} />
                <Text>
                  COMING SOON
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
