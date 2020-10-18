import React, { Component } from 'react';
import { Picker, Content, Form, Textarea, Container, Item, Label, Input, Icon, Card } from 'native-base';
import { connect } from 'react-redux';
import { carerUpdate } from './../../BookAppointment/actions';

class CarerForm extends Component {
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
            onChangeText={value => this.props.carerUpdate({ prop: 'name', value })}
            />
          </Item>
        </Card>

<Card>
          <Item floatingLabel>
               <Icon active name='home' />
              <Label>Phone No</Label>
              <Input
              value={this.props.phone}
              onChangeText={value => this.props.carerUpdate({ prop: 'phone', value })}
              />
            </Item>
</Card>

<Card>
          <Item floatingLabel>
               <Icon active name='home' />
              <Label>Address</Label>
              <Input
              value={this.props.address}
              onChangeText={value => this.props.carerUpdate({ prop: 'address', value })}
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
           selectedValue={this.props.type}
           onValueChange={value => this.props.carerUpdate({ prop: 'type', value })}
        >
           <Picker.Item label="Geriatric" value="Geriatric" />
           <Picker.Item label="Peadiatry" value="Peadiatry" />
         </Picker>
        </Item>
</Card>

</Form>

     <Content padder>
     <Form>
        <Textarea
        value={this.props.note}
        onChangeText={value => this.props.carerUpdate({ prop: 'note', value })}
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
  const { name, phone, address, type, note } = state.carerForm;

  return { name, phone, address, type, note };
};

export default connect(mapStateToProps, { carerUpdate })(CarerForm);
