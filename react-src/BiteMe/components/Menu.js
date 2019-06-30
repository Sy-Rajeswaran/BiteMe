import React, {Component} from 'react';
import {Appbar, Title} from 'react-native-paper';
import {StyleSheet, ScrollView, View,Text} from 'react-native';
import CounterApp from './counterApp'

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
            <Appbar.Action icon="shopping-cart" onPress={() => navigate('Checkout', {value1:this.counter1}, value2= this.counter2)}/>
            </Appbar.Header>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'center'
                , alignItems:'stretch'}}> 
                    <Title>Menu</Title>
                </View>
                <CounterApp/>
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