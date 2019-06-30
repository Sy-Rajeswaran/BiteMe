import React, {Component} from 'react';
import {Appbar, Card, Paragraph, Title, Button} from 'react-native-paper';
import {Alert,StyleSheet, ScrollView, View,Text} from 'react-native';
import CounterApp from './counterApp'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
var value1, value2
const initialState = {
    counter1:0,
    counter2:0
}
const reducer = (state= initialState, Action) => {
    switch(Action.type){
        case 'INCREASE_COUNTER1':
            Alert.alert("Burger added to Cart")
            value1 = state.counter1 +1
            value2=state.counter2
            return {counter2:value2, counter1: value1}
        case 'INCREASE_COUNTER2':
            Alert.alert("Ribs added to Cart")
            value2 = state.counter2 +1
            value1=state.counter1
            return {counter2: value2 , counter1:value1}
        case 'DECREASE_COUNTER1':
            if (state.counter1 >0){
                Alert.alert('Burger removed from Cart')
                value1=state.counter1 -1
                value2= state.counter2
                return{counter1: value1, counter2:value2}
            }
        case 'DECREASE_COUNTER2':
                if (state.counter2 >0){
                    Alert.alert('Ribs removed from Cart')
                    value2=state.counter2 -1
                    value1= state.counter1
                    return{counter2: value2 -1, counter1:value1}
                }
    }
    return state

}
const store1 = createStore(reducer)
export default class Menu extends Component {
    static navigationOptions = {
        title: 'Menu',
      };
      

      render() {
          const {navigate}=this.props.navigation;
          return(
            <ScrollView>
            <Appbar.Header>
            <Appbar.BackAction onPress={() => this.props.navigation.goBack()}/>
            <Appbar.Action icon="shopping-cart" onPress={() => navigate('Checkout', {value1: this.value1, value2: this.value2})}/>
            </Appbar.Header>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'center'
                , alignItems:'stretch'}}> 
                    <Title>Menu</Title>
                </View>
                <Provider store = {store1}>
                <CounterApp/>
                </Provider>
            </ScrollView>

          );

      }
}

const styles = StyleSheet.create({
    viewResizing: {
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch',
        margin: 10,
        justifyContent:'space-between'
    }
});