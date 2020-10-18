'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Thumbnail, Button } from 'native-base';

export default class CallContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'CALL',
    tabBarIcon: ({ tintColor }) => (
      <Icon
      name="ios-call"
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
               <Card>
                 <CardItem header>
                   <Text style={{ color: '#ec553d' }} >Health</Text><Text style={{ color: '#47596d' }} >Boxes</Text>
                 </CardItem>

                 <CardItem>
                 <Left>
               <Thumbnail source={require('../../assets/logobox.png')} />
               </Left>
               </CardItem>
                 <CardItem>
                   <Body>
                     <Text>
                       We offer free consultation with doctors and specialist.
                       You can call all our primary healthcare
                       physicians for free on any health conditions.
                     </Text>
                     <Text />
                     <Text> Click the <Text style={{ color: '#ec553d' }}>BUTTON</Text> below to speak with our physicians </Text>
                   </Body>
                 </CardItem>
              </Card>
              <Text />
              <Text />
              <Button
              style={{ backgroundColor: '#FF7F50' }}
              danger
              block
              onPress={() =>
                RNImmediatePhoneCall.immediatePhoneCall('+2349091111129', true)}
              >
            <Text style={{ fontWeight: '800' }}>CALL</Text>
           </Button>
             </Content>
           </Container>


    );
  }
  }
