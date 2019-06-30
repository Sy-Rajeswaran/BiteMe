import React, {Component} from 'react';
import {Appbar, Card, Paragraph, Title, Button} from 'react-native-paper';
import {StyleSheet, ScrollView, View} from 'react-native';
import NavBar from './navigation';

export default class ListOfRestaurants extends React.Component {

    static navigationOptions = {
        title: 'Restaurants',
      };

    render() {
        const {navigate}=this.props.navigation;
        return (
            <View style={styles.viewResizing}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => this.props.navigation.goBack()}></Appbar.BackAction>
            </Appbar.Header>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'center'
                , alignItems:'stretch'}}> 
                    <Title>Fast Food Restaurants </Title>
                </View>
                    <ScrollView contentContainerStyle={styles.viewResizing}>
                        <Card elevation={3}>
                            <Card.Cover source={require('../assets/Mcdonalds.jpg')}/>
                            <Card.Content>
                                <Title>
                                    Mcdonalds
                                </Title>
                                <Paragraph>
                                    Fast Food Restaurant Chain
                                </Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={()=>navigate('Menu')}>Menu</Button>
                            </Card.Actions>
                        </Card>
                        <Card elevation={3}>
                            <Card.Cover source={require('../assets/Popeyes.png')}/>
                            <Card.Content>
                                <Title>
                                    Popeyes
                                </Title>
                                <Paragraph>
                                    Fast Food Restaurant Chain
                                </Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={()=>navigate('Menu')}>Menu</Button>
                            </Card.Actions>
                        </Card>
                        <Card elevation={3}>
                            <Card.Cover source={require('../assets/3Brothers.png')}/>
                            <Card.Content>
                                <Title>
                                    3 Brothers Shwarma
                                </Title>
                                <Paragraph>
                                    Fast Food Restaurant Chain
                                </Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={()=>navigate('Menu')}>Menu</Button>
                            </Card.Actions>
                        </Card>
                    </ScrollView>
                
            </View>
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