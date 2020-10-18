import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ShopContainer from '../containers/ShopContainer';
import CallContainer from '../containers/CallContainer';
import Explore from '../containers/Stacks/Explore';
import Profile from '../containers/Stacks/Profile';

import colors from '../styles/colors';


const LoggedInTabNavigator = TabNavigator({
  Explore: { screen: Explore },
  ShopContainer: { screen: ShopContainer },
  CallContainer: { screen: CallContainer },
  Profile: { screen: Profile },
}, {
  tabBarOptions: {
    labelStyle: {
    fontWeight: '600',
    marginBottom: 4,
},
activeTintColor: colors.orange01
},
navigationOptions: ({ navigation }) => {
  const { routeName, routes } = navigation.state;
  const params = routes && routes[1] && routes[1].params;
  return {
    tabBarVisible:
      params && params.hideTabBar != null ? !params.hideTabBar : true,
    swipeEnabled:
      params && params.hideTabBar != null ? !params.hideTabBar : true
  };
},

});


export default LoggedInTabNavigator;
