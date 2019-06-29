import * as React from 'react';
import {Searchbar, Card, Paragraph, Title, Button} from 'react-native-paper';
import {StyleSheet, ScrollView, View} from 'react-native';

export default class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            firstQuery: '',
            status: false
        }
    }
    static navigationOptions = {
        title: 'Search',
      };

    render() {
        const {firstQuery} = this.state;
        //const {navigate}=this.props.navigation;
        return (
            <View style={styles.viewResizing}>
                <Searchbar placeholder="Search for Restaurants..."
                onChangeText={query => {
                    this.setState({firstQuery:query});
                    if(query===''){
                        this.setState({status:false});
                    } else {
                        this.setState({status:true});
                    }
                }}
                value={firstQuery}>
                </Searchbar>
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