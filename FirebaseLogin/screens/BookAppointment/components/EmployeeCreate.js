import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Container, Button, Text, Content, Card } from 'native-base';


class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, appointment, date, note, local } = this.props;

    this.props.employeeCreate({ name, phone, appointment: appointment || 'ENT', date, note, local: local || 'Alimosho' });
  }

  render() {
    return (
      <Container>
        <Card transparent />
        <EmployeeForm {...this.props} />



          <Card transparent />
          <Card transparent />
          <Card transparent />
        <Button warning full onPress={this.onButtonPress.bind(this)} >
               <Text> Sumbit </Text>
        </Button>


       </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, appointment, date, note, local } = state.employeeForm;

  return { name, phone, appointment, date, note, local };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
