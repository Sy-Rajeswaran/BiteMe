import * as React from 'react';
import {Searchbar} from 'react-native-paper';

export default class Search extends React.Component {
    state = {
        firstQuery: '',
    };

    render() {
        const {firstQuery} = this.state;
        return (
            <Searchbar placeholder="Search for Restaurants..."
            onChangeText={query => {this.setState({firstQuery:query})}}
            value={firstQuery}>
            </Searchbar>
        )
    }
}