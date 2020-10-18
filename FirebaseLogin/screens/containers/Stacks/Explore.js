import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreContainer from '../ExploreContainer';
import ExploreList from '../ExploreList';
import HospitalList from './../HospitalList/App';
import SpecialistList from './../SpecialistList/App';
import GymList from './../GymList/App';


const RouteConfigs = {
    Explore: { screen: ExploreContainer },
    ExploreList: { screen: ExploreList },
    HospitalList: { screen: HospitalList },
    SpecialistList: { screen: SpecialistList },
    GymList: { screen: GymList },

};
const SomeStack = StackNavigator(RouteConfigs);

export default class Explore extends Component {
  static navigationOptions = {
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
      name="ios-medkit"
      size={25}
      color={tintColor}
      />
    ),
  };
  render() {
    return (
      <SomeStack screenProps={this.props.screenProps} />
    );
  }
}
