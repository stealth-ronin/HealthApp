import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Button, ListItem, Text, Left, Body } from 'native-base';

export default class ProfileContainer extends Component {
  static navigationOptions = { header: null }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header transparent />
        <Content>
          <ListItem button onPress={() => navigate('App')} icon>
            <Left>
              <Button style={{ backgroundColor: '#ec553d' }}>
                <Icon active name="ios-chatboxes" />
              </Button>
            </Left>
            <Body>
              <Text>Chat With Us</Text>
            </Body>
          </ListItem>

          <ListItem button onPress={() => navigate('EmployeeCreate')} icon>
            <Left>
              <Button style={{ backgroundColor: '#47596d' }}>
                <Icon active name="ios-book" />
              </Button>
            </Left>
            <Body>
              <Text>Book a Doctor</Text>
            </Body>
          </ListItem>

          <ListItem button onPress={() => navigate('CarerCreate')} icon>
            <Left>
              <Button style={{ backgroundColor: '#ec553d' }}>
                <Icon active name="ios-body" />
              </Button>
            </Left>
            <Body>
              <Text>Book A Carer</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#47596d' }}>
                <Icon active name="ios-folder" />
              </Button>
            </Left>
            <Body>
              <Text>Medical Records</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => navigate('About')} icon>
            <Left>
              <Button style={{ backgroundColor: '#ec553d' }}>
                <Icon active name="ios-help-circle-outline" />
              </Button>
            </Left>
            <Body>
              <Text>About us</Text>
            </Body>
          </ListItem>
          <ListItem button button onPress={() => navigate('Login')} icon>
            <Left>
              <Button style={{ backgroundColor: '#47596d' }}>
                <Icon active name="ios-log-out" />
              </Button>
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
