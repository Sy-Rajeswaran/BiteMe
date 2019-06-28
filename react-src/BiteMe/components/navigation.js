import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

export default class NavBar extends React.Component {

  render() {
    return (
      <Appbar.Header>
            <Appbar.BackAction
              onPress={this._goBack}
              disabled={true}
            />
            <Appbar.Action icon="shopping-cart"/>
      </Appbar.Header>
    );
  }
}