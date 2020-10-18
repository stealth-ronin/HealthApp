import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

import colors from '../../styles/colors';
import HeartButton from '../../buttons/HeartButton';
import Stars from '../Stars';

export default class Listings extends Component {
  constructor(props) {
    super(props);
    this.renderListing = this.renderListing.bind(this);
  }
  get randomColor() {
    const colorList = [
      colors.silver,
      colors.darkRed,
      colors.black,
      colors.tomato,
      colors.orangered,
      colors.gold,
      colors.coral,
    ];
    return colorList[Math.floor(Math.random() * colorList.length)];
  }
  renderListing() {
    const { listings, showAddToFav, handleAddToFav, favouriteListings } = this.props;
    return listings.map((listing, index) => (
      <TouchableOpacity style={styles.cardContent}>
        <View style={styles.card} key={`listing-${index}`}>
        {showAddToFav ?
          <View style={styles.addToFavoriteBtn}>
          <HeartButton
          color={colors.orange01}
          selectedColor={colors.orange01}
          selected={favouriteListings.indexOf(listing.id) > -1}
              onPress={() => handleAddToFav(listing)}
          />
          </View>
           : null}
          <Image
          style={styles.image}
          resizeMode="contain"
          source={listing.photo}
          />
          <Text style={[{ color: this.randomColor }, styles.listingType]}>{listing.type}</Text>
          <Text
          style={styles.listingTitle}
          numberOfLines={8}
          >{listing.title}</Text>
          <Text style={styles.listingPrice}>#{listing.price}{listing.priceType}</Text>
          <Stars
votes={listing.stars}
size={10}
color={colors.orange01}
          />
        </View>
      </TouchableOpacity>
    ));
  }
  render() {
    const { title } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Icon
          name="chevron-circle-right"
          size={20}
          color={colors.orange01}
          />
        </TouchableOpacity>
        </View>
        <ScrollView
        contentContainerStyle={{ paddingRight: 30 }}
style={styles.scrollView}
        horizontal
        showHorizontalScrollIndicator={false}
        >

          {this.renderListing()}
        </ScrollView>
      </View>
    );
  }
}

Listings.propTypes = {
  title: PropTypes.string.isRequired,
  boldTitle: PropTypes.bool,
  listings: PropTypes.array.isRequired,
  showAddToFav: PropTypes.bool,
  handleAddToFav: PropTypes.func,
  favouriteListings: PropTypes.array,
};
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  title: {
    color: colors.hbxGrey,
    fontWeight: '600',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 21,

  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  seeAllBtnText: {
    color: colors.orange01,
    marginRight: 5,
    fontSize: 15,
    fontWeight: '600',

  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 40,
  },
  card: {
    marginRight: 6,
    marginLeft: 6,
    width: 157,
    flexDirection: 'column',
    minHeight: 100,

  },

  image: {
    width: undefined,
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginBottom: 7,
  },
  listingType: {
    fontWeight: '800',
    fontSize: 13,
    padding: 3,
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
    color: colors.black,

  },

  addToFavoriteBtn: {
    position: 'absolute',
    right: 12,
    top: 7,
    zIndex: 2,
  },
  listingPrice: {
    color: colors.hbxGrey,
    marginTop: 4,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: '500',
  }
});
