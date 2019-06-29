import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class NavBar extends React.Component {

  render() {
    return (
      <Appbar.Header>
            <Appbar.BackAction onPress={() => this.props.navigation.goBack()}/>
            <Appbar.Action icon="shopping-cart"/>
      </Appbar.Header>
    );
  }
}