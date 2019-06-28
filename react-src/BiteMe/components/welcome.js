import React, {Component} from 'react';
import Search from './searchbar';
import NavBar from './navigation';
import {StyleSheet, View, Image, ScrollView, Button} from 'react-native';

export default class Welcome extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };

    render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.outerContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyling} source={require('../assets/Logo.png')}/>
        </View>
        <View style={styles.innerContainer}>
          <Search/>
        </View>
        <Button title="Click" onPress={()=>navigate('Payment')}></Button>
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
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems: 'stretch'
  },
  imageContainer:{
    flex: 2,
    alignItems:'center'
  },
  imageStyling:{
    flex: 1,
    width: 125,
    height:125,
    resizeMode: 'contain'
  }
});