import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Picker, DatePicker, Content, Form, Textarea, Container, Item, Label, Input, Header, Icon, Card } from 'native-base';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
      <Content>
        <Form>
        <Card transparent>
        <Item floatingLabel>
         <Icon
         active name='home'
         />
         <Label>Enter Name</Label>
            <Input
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            />
          </Item>
        </Card>

<Card>
          <Item floatingLabel>
               <Icon active name='home' />
              <Label>Phone No</Label>
              <Input
              value={this.props.phone}
              onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
              />
            </Item>
</Card>


<Card>
        <Item>
        <Picker
           note
           placeholder="Select appointment type"
           placeholderStyle={{ color: '#FF7F50' }}
           placeholderIconColor="#47596d"
           style={{ width: undefined }}
           mode="dropdown"
           iosIcon={<Icon name="arrow-down" />}
           selectedValue={this.props.appointment}
           onValueChange={value => this.props.employeeUpdate({ prop: 'appointment', value })}
        >
           <Picker.Item label="Pediatric Surgery" value="Pediatric Surgery" />
           <Picker.Item label="ENT" value="ENT" />
           <Picker.Item label="Orthopaedic Surgery" value="Orthopaedic Surgery" />
           <Picker.Item label="Psychiatry" value="Psychiatry" />
           <Picker.Item label="Urology" value="Urology" />
           <Picker.Item label="General Medicine" value="General Medicine" />
           <Picker.Item label="Opthalmologist" value="Opthalmologist" />
         </Picker>
        </Item>
</Card>
<Card>
        <Item>
        <DatePicker
          defaultDate={new Date(2019, 1, 1)}
          minimumDate={new Date(2019, 1, 1)}
          maximumDate={new Date(2019, 12, 31)}
          locale={'en'}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={'fade'}
          androidMode={'default'}
          placeHolderText="Select date"
          textStyle={{ color: 'grey' }}
          placeHolderTextStyle={{ color: '#FF7F50' }}
          disabled={false}
          selectedValue={this.props.date}
          onDateChange={value => this.props.employeeUpdate({ prop: 'date', value })}
        />

        </Item>
</Card>
<Card>
        <Item>
        <Picker
          placeholder="Select your local-government"
          placeholderStyle={{ color: '#FF7F50' }}
          placeholderIconColor="#007aff"
          style={{ width: undefined }}
          mode="dropdown"
          iosIcon={<Icon name="arrow-down" />}
          note
          selectedValue={this.props.local}
          onValueChange={value => this.props.employeeUpdate({ prop: 'local', value })}
        >
          <Picker.Item label="Alimosho" value="Alimosho" />
          <Picker.Item label="Ajeromi-ifelodun" value="Ajeromi-ifelodun" />
          <Picker.Item label="Kosofe" value="Kosofe" />
          <Picker.Item label="Mushin" value="Mushin" />
          <Picker.Item label="Oshodi-Isolo" value="Oshodi-Isolo" />
          <Picker.Item label="Ojo" value="Ojo" />
          <Picker.Item label="Ikorodu" value="Ikorodu" />
          <Picker.Item label="Surulere" value="Surulere" />
          <Picker.Item label="Agege" value="Agege" />
          <Picker.Item label="Ifako-Ijaiye" value="Ifako-Ijaiye" />
          <Picker.Item label="Shomolu" value="Shomolu" />
          <Picker.Item label="Amuwo-Odofin" value="Amuwo-Odofin" />
          <Picker.Item label="Ikeja" value="Ikeja" />
          <Picker.Item label="Eti-Osa" value="Eti-Osa" />
          <Picker.Item label="Badagry" value="Badagry" />
          <Picker.Item label="Apapa" value="Apapa" />
          <Picker.Item label="Island" value="Island" />
          <Picker.Item label="Epe	" value="Epe" />
          <Picker.Item label="Ibeju-Lekki" value="Ibeju" />
        </Picker>
        </Item>
</Card>
</Form>

     <Content padder>
     <Form>
        <Textarea
        value={this.props.note}
        onChangeText={value => this.props.employeeUpdate({ prop: 'note', value })}
        rowSpan={5} bordered placeholder="Enter Additional Notes"
        />
</Form>
     </Content>


  </Content>
  </Container>


    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, appointment, date, note, local } = state.employeeForm;

  return { name, phone, appointment, date, note, local };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
