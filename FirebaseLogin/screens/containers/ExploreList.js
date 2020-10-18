import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Button, ListItem, Text, Left, Body } from 'native-base';

export default class ExploreList extends Component {
  static navigationOptions = {
    headerRight: <Button full title="Save"  />,

   }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Header transparent />
        <Content>
          <ListItem button onPress={() => navigate('HospitalList')} icon>
            <Left>
              <Button style={{ backgroundColor: '#ec553d' }}>
                <Icon active name="ios-medkit" />
              </Button>
            </Left>
            <Body>
              <Text>Hospitals</Text>
            </Body>
          </ListItem>

          <ListItem button onPress={() => navigate('SpecialistList')} icon>
            <Left>
              <Button style={{ backgroundColor: '#47596d' }}>
                <Icon active name="ios-people" />
              </Button>
            </Left>
            <Body>
              <Text>Specialist</Text>
            </Body>
          </ListItem>

          <ListItem button onPress={() => navigate('GymList')} icon>
            <Left>
              <Button style={{ backgroundColor: '#ec553d' }}>
                <Icon active name="ios-nutrition" />
              </Button>
            </Left>
            <Body>
              <Text>Gym/SPAS</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
