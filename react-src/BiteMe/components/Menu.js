import React, {Component} from 'react';
import {Appbar, Title} from 'react-native-paper';
import {Alert,StyleSheet, ScrollView, View,Text} from 'react-native';
import CounterApp from './counterApp'
import {Value1, Value2} from '../index';
import Toast from 'react-native-root-toast';

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
            <Appbar.Action icon="shopping-cart" onPress={() => {if (Value1.toString() == 0 && Value2.toString()==0) {
                
                Toast.show("Empty Cart",{
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                    backgroundColor:'red'
                });
            } else {
                this.props.navigation.navigate('Checkout', {value1:Value1.toString(), value2:Value2.toString()})

                
            }}}/>
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