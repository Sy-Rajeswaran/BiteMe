import * as React from 'react';
import {View, Button, StyleSheet, ScrollView} from 'react-native';
import NavBar from './navigation';
import {Appbar,Switch, TextInput, RadioButton, Text, Avatar, Title} from 'react-native-paper';

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
                        onChangeText={text => this.setState({streetAddress:text})}>
            </TextInput>
            <TextInput mode='outlined'
                        label='Enter Postal Code...'
                        maxLength={6}
                        value={this.state.postalCode}
                        onChangeText={text => this.setState({postalCode:text})}>
                         
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
                        maxLength = {12}
                        value={this.state.cardNumber}
                        onChangeText={text => this.setState({cardNumber:text})}
                        keyboardType={'numeric'}>
            </TextInput>
            <TextInput mode='outlined'
                        label='Enter Card Expiry Date (MM/DD)...'
                        value={this.state.expiryDate}
                        onChangeText={text => this.setState({expiryDate:text})}>
            </TextInput>
            <TextInput mode='outlined'
                        label='Enter Card CVC...'
                        maxLength={3}
                        value={this.state.cvc}
                        onChangeText={text => this.setState({cvc:text})}
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
            <Button title="Place Order" ></Button>
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