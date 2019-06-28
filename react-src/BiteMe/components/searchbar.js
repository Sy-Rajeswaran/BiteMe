import * as React from 'react';
import {Searchbar, Card, Paragraph, Title} from 'react-native-paper';
import {StyleSheet, ScrollView, View} from 'react-native';

export default class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            firstQuery: '',
            status: false
        }
    }

    render() {
        const {firstQuery} = this.state;
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
                {this.state.status &&
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
                        </Card>
                    </ScrollView>
                }
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