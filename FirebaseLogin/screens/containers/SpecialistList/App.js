
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './Deck';

const DATA = [
  { id: 1, text: 'Specialist List', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/martha-dominguez-de-gouveia-473064-unsplash-1.jpg', desc: 'Hey' },
  { id: 2, text: 'Dr Olu Lasaki', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing7.png' },
  { id: 3, text: 'Dr (Miss) Atoyebi', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing8.png' },
  { id: 4, text: 'Dr Adebayo Adefolaseye', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing9.png' },
  { id: 5, text: 'Dr Akinwale Akinfe', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing10.png' },
  { id: 6, text: 'Dr Banji Adesoji', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing11.png' },
];

class SpecialistList extends React.Component {
  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}>
          {item.desc}
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
});
export default SpecialistList;
