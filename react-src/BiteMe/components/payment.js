import * as React from 'react';
import {View, Button, StyleSheet, ScrollView} from 'react-native';
import {Appbar,Switch, TextInput, RadioButton, Text, Avatar, Title} from 'react-native-paper';
import Toast from 'react-native-root-toast';

export default class Payment extends React.Component{
    static navigationOptions = {
        title: 'Payment',
      };
    
    state={
        streetAddress:'',
        postalCode:'',
        cardName:'',
        cardNumber:'',
        expiryDate:'',
        cvc:'',
        value:'first',
        isSwitchOn: false
    };

    validatePostalCode(){
        if(this.state.postalCode!=null){
            var regex = /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/;
            
            if (regex.test(this.state.postalCode)) {
                return true;
            } else{
                return false;
            }
        }
    }

    validateCardNumber(){
        if(this.state.cardNumber!=null){
            var regex = /[0-9]{13,16}/;

            if (regex.test(this.state.cardNumber)) {
                return true;
            } else{
                return false;
            }
        }
    }

    validateExpiryDate(){
        if(this.state.expiryDate!=null){
            var regex = /(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;

            if (regex.test(this.state.expiryDate)) {
                return true;
            } else{
                return false;
            }
        }
    }

    validateCVC(){
        if(this.state.cvc!=null){
            var regex = /^[0-9]{3,4}$/;

            if (regex.test(this.state.cvc)) {
                return true;
            } else{
                return false;
            }
        }
    }

    render(){
        const {isSwitchOn} = this.state;
        return(
        <ScrollView>
            <Appbar.Header>
            <Appbar.BackAction onPress={() => this.props.navigation.goBack()}/>
            <Appbar.Action icon="shopping-cart" onPress={() => this.props.navigation.navigate('Checkout')}/>
            </Appbar.Header>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'center'
            , alignItems:'stretch'}}> 
                <Title>Payment</Title>
            </View>
            <TextInput mode='outlined'
                        label='Enter Street Address...'
                        value={this.state.streetAddress}
                        onChangeText={text => {
                            this.setState({streetAddress:text});
                        }}>
            </TextInput>
            <TextInput mode='outlined'
                        label='Enter Postal Code (A0A 0A0)...'
                        value={this.state.postalCode}
                        onChangeText={text => {
                            this.setState({postalCode:text});
                        }}>
                         
            </TextInput>
            <RadioButton.Group
                        onValueChange={value => this.setState({ value })}
                        value={this.state.value}
                                                >
                <View style={styles.paymentChoiceLayout}>
                    <Text style={{marginRight:10}}>Debit</Text>
                    <Avatar.Icon color='#FFFFFF' size={24} icon="credit-card"/>
                    <RadioButton value="first" />
                </View>
                <View style={styles.paymentChoiceLayout}>
                    <Text style={{marginRight:10}}>Credit</Text>
                    <Avatar.Icon color='#FFFFFF' size={24} icon="credit-card"/>
                    <RadioButton value="second" />
                </View>
            </RadioButton.Group>
            <TextInput mode='outlined'
                        label='Enter Name on Card...'
                        value={this.state.cardName}
                        onChangeText={text => this.setState({cardName:text})}>
            </TextInput>
            <TextInput mode='outlined'
                        label='Enter Card Number...'
                        maxLength = {16}
                        value={this.state.cardNumber}
                        onChangeText={text => {
                            this.setState({cardNumber:text})
                        }}
                        keyboardType={'numeric'}>
            </TextInput>
            <TextInput mode='outlined'
                        label='Enter Card Expiry Date (MM-DD)...'
                        value={this.state.expiryDate}
                        onChangeText={text => {
                            this.setState({expiryDate:text})
                        }}>
            </TextInput>
            <TextInput mode='outlined'
                        label='Enter Card CVC...'
                        maxLength={3}
                        value={this.state.cvc}
                        onChangeText={text => {
                            this.setState({cvc:text})
                        }}
                        keyboardType={'numeric'}>
            </TextInput>
            <View style={styles.paymentChoiceLayout}>
                <Text>Meet Driver at Door</Text>
                <Switch
                    value={isSwitchOn}
                    onValueChange={() =>
                    { this.setState({ isSwitchOn: !isSwitchOn }); }
                    }
                />
            </View>
            <Button title="Place Order" onPress={() =>{
                if(this.state.streetAddress==''){
                    Toast.show("Empty Street Address",{
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor:'red'
                    });
                }else if(!this.validatePostalCode()){
                    Toast.show("Invalid Postal Code",{
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor:'red'
                    });
                } else if(this.state.cardName==''){
                    Toast.show("Empty Card Name",{
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor:'red'
                    });
                }else if(!this.validateCardNumber()){
                    Toast.show("Invalid Card Number",{
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor:'red'
                    });
                } else if(!this.validateExpiryDate()){
                    Toast.show("Invalid Expiry Date",{
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor:'red'
                    });
                } else if(!this.validateCVC()){
                    Toast.show("Invalid CVC",{
                        duration: Toast.durations.SHORT,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor:'red'
                    });
                } else {
                    Toast.show("Order Successfully Placed!",{
                        duration: Toast.durations.LONG,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor:'green'
                    });
                    this.props.navigation.navigate('Welcome');
                }
            }}></Button>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    paymentChoiceLayout:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center', 
        alignItems:'center',
        marginTop:7,
        marginBottom:7 
    }
});