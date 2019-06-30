import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import NavBar from './navigation';
import {Appbar,Headline, DataTable} from 'react-native-paper';

/**
 * Yo Sy, if you're looking at this and thinking "What the hell do I do", let me guide you my friend.
 * First, you need to pass in "props" into this class which is basically passing values from component-to-component
 * Second, Replace my silly hardcoded values with the legit ones. Look at <DataTable.Row> tags..
 * Third, If you're still confused, message me. I'll help 
 */
export default class Checkout extends React.Component{
    constructor(props){
    super(props)
    this.state={
        value1 : this.props.navigation.state.param.value1 ,
        value2 : this.props.navigation.state.param.value2
    }
    }
    render(){
        const {navigate}= this.props.navigation;
        return(
            <View>
            <Appbar.Header>
            <Appbar.BackAction onPress={() => this.props.navigation.goBack()}/>
            <Appbar.Action icon="shopping-cart" onPress={() => navigate('Checkout')}/>
            </Appbar.Header>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'center'
            , alignItems:'stretch'}}>
                    <Headline>Checkout Cart</Headline>
                </View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Food Item</DataTable.Title>
                        <DataTable.Title numeric>Quantity</DataTable.Title>
                        <DataTable.Title numeric>Total($)</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>Burgers</DataTable.Cell>
                        <DataTable.Cell >{this.state.value1}</DataTable.Cell>
                        <DataTable.Cell numeric>14.96</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell>Ribs</DataTable.Cell>
                        <DataTable.Cell >{this.state.value2}</DataTable.Cell>
                        <DataTable.Cell numeric>34.21</DataTable.Cell>
                    </DataTable.Row>

                </DataTable>
                <Button title="Continue to Payment" onPress={() => navigate('Payment')}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});