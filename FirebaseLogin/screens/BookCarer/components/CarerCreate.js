import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carerUpdate, carerCreate } from '../../BookAppointment/actions';
import CarerForm from './CarerForm';
import { Container, Button, Text, Card } from 'native-base';


class CarerCreate extends Component {
  onButtonPress() {
    const { name, phone, address, type, note } = this.props;

    this.props.carerCreate({ name, phone, address, type: type || 'Geriatric', note });
  }

  render() {
    return (
      <Container>
        <Card transparent />
        <CarerForm {...this.props} />


          <Card transparent />
          <Card transparent />
          <Card transparent />
        <Button full warning onPress={this.onButtonPress.bind(this)} >
               <Text> Sumbit </Text>
        </Button>

       </Container>
    );
  }
}
const mapStateToProps = (state) => {
  const { name, phone, address, type, note } = state.carerForm;

  return { name, phone, address, type, note };
};

export default connect(mapStateToProps, {
  carerUpdate, carerCreate
})(CarerCreate);
