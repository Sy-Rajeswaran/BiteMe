import React, {Component} from 'react';
import Search from './searchbar';
import NavBar from './navigation';
import {StyleSheet, View, Image, Button} from 'react-native';

export default class Welcome extends Component {
  static navigationOptions = {
      title: 'Welcome',
  };
    render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.outerContainer}>
        <NavBar/>
        <View style={styles.innerContainer}>
          <Image source={require('../assets/Logo.png')}/>
          <Search/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'stretch',
    backgroundColor: '#F5FCFF'
  },
  innerContainer:{
    flex: 2,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems: 'center'
  }
});