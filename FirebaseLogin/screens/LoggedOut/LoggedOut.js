import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBarButton from './../buttons/NavBarButton';
import RoundedButton from './../buttons/RoundedButton';
// import { transparentHeaderStyle } from '../styles/navigation';
import colors from '../styles/colors';
import iPhoneSize from '../../helpers/utils';

let termsTextSize = 13;
let headingTextSize = 30;
if (iPhoneSize() === 'small') {
  termsTextSize = 12;
  headingTextSize = 26;
}

export default class LoggedOut extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton handleButtonPress={() => navigation.navigate('Login')} />,
    // headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white,
  });

  onFacebookPress() {
    alert('facebook button pressed');
  }

  onCreateAccountPress() {
    alert('Create account button pressed');
  }

  onMoreOptionsPress() {
    alert('More options button pressed');
  }

  render() {
  return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
          source={require('../../../img/logobox.png')}
          style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to HealthBoxes</Text>
          <RoundedButton
          text="Continue with facebook"
          textColor={colors.orange01}
          background={colors.white}
          icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
          handleOnPress={this.onFacebookPress}
          />

          <RoundedButton
          text="Create Account"
          textColor={colors.white}
          handleOnPress={this.onCreateAccountPress}
          />

          <TouchableHighlight style={styles.moreOptionsButton} onPress={this.onMoreOptionsPress}>
            <Text style={styles.moreOptionsButton}>More Options</Text>


          </TouchableHighlight>
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>By
            tapping continue, Create Account or more </Text>
            <Text style={styles.termsText}>Options</Text>
              <Text style={styles.termsText}>I agree to terms</Text>
              <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termsText}> Terms of Service </Text>
              </TouchableHighlight>
                <Text style={styles.termsText}>Options</Text>
                <TouchableHighlight style={styles.linkButton}>
                  <Text style={styles.termsText}> Payments Terms </Text>
                </TouchableHighlight>

                  <Text style={styles.termsText}>,</Text>
                  <TouchableHighlight style={styles.linkButton}>
                    <Text style={styles.termsText}>Privacy Policy</Text>
                  </TouchableHighlight>

                      <Text style={styles.termsText}>,</Text>
                      <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Disclosure Policy</Text>
                      </TouchableHighlight>
                      <Text style={styles.termsText}>Disclosure Policy</Text>

          </View>
        </View>
      </View>

  );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.white,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: headingTextSize,
    color: colors.orange01,
    fontWeight: '300',
    marginBottom: 40,
  },
  facebookButtonIcon: {
    color: colors.orange01,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton: {
    marginTop: 10,
  },
  moreOptionsButtonText: {
    color: colors.orange01,
    fontSize: 16,
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  termsText: {
    color: colors.orange01,
    fontSize: termsTextSize,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.orange01,
  },

});
