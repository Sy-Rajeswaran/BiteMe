import React, {Component} from 'react';
import {Appbar, Card, Paragraph, Title, Button} from 'react-native-paper';
import {StyleSheet, ScrollView, View} from 'react-native';
import NavBar from './navigation';

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
            <Appbar.Action icon="shopping-cart" onPress={() => navigate('Checkout')}/>
            </Appbar.Header>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'center'
                , alignItems:'stretch'}}> 
                    <Title>Menu</Title>
                </View>
                    <Card>
                    <Card.Cover source={require('../assets/burger.jpg')}/>
                            <Card.Content>
                                <Title>
                                    Burger
                                </Title>
                                <Paragraph>
                                This is the sweet-savory burger of your dreams. The two meat mixture is key here: 
                                The sirloin and has clean, distinctive flavor, while the chuck provides fattiness 
                                and keeps the burger juicy. 
                                </Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button icon = "add"></Button>
                                <Button icon ="remove"></Button>
                            </Card.Actions>
                    </Card>
                    <Card>
                    <Card.Cover source={require('../assets/ribs.jpg')}/>
                            <Card.Content>
                                <Title>
                                    Ribs
                                </Title>
                                <Paragraph>
                                Covered with our secret recipe rub then slow smoked for 4-6 hours over hardwood oak 
                                and apple woods to ‘melt-in-your-mouth’ perfection. Help yourself to the sauce of your choice. 
                                </Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button icon = "add"></Button>
                                <Button icon ="remove"></Button>
                            </Card.Actions>
                    </Card>

                
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