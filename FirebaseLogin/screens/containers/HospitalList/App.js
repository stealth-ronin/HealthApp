
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './Deck';


const DATA = [
  { id: 1, text: 'Hospital List', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/martha-dominguez-de-gouveia-473064-unsplash-1.jpg', desc: 'Hey' },
  { id: 2, text: 'AfriGlobal Medicare', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing1.png' },
  { id: 3, text: 'Med In', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing2.png' },
  { id: 4, text: 'Fatori Eye Clinic', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing3.png' },
  { id: 5, text: 'Ocuville Eye Clinic', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing4.png' },
  { id: 6, text: 'Care Forte Pharmacy', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing5.png' },
  { id: 7, text: 'Spring Care Pharmacy', uri: 'https://www.healthboxes.com/wp-content/uploads/2019/01/listing6.jpg' },
  
];

class HospitalList extends React.Component {
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
export default HospitalList;
