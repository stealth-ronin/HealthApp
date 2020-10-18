import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../../BookAppointment/reducers';
import ProfileContainer from '../ProfileContainer';
import App from '../Chat/chat';
import Login from '../../Login';
import EmployeeCreate from '../../BookAppointment/components/EmployeeCreate';
import CarerCreate from '../../BookCarer/components/CarerCreate';

import About from '../../About/about';


const RouteConfigs = {
    Profile: { screen: ProfileContainer },
    App: { screen: App },
    EmployeeCreate: { screen: EmployeeCreate },
    About: { screen: About },
    CarerCreate: { screen: CarerCreate },
    Login: { screen: Login },
};

const SomeStack = StackNavigator(RouteConfigs)
;
export default class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: 'PROFILE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
      name="ios-person"
      size={25}
      color={tintColor}
      />
    ),

  };
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
       <Provider store={store}>
          <SomeStack screenProps={this.props.screenProps} />
       </Provider>
    );
  }
}
