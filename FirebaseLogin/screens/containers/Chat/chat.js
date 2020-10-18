import React, { Component } from 'react';
import LiveChat from 'react-native-livechat';

type Props = {};
export default class App extends Component<Props> {

  // static navigationOptions = { header: null }
  static navigationOptions = { tabBarVisible: true }


  render() {
    return (

<LiveChat bubbleLeft={0} bubbleTop={0} license={10403767} />
    );
  }
}
