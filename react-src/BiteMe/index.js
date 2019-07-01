/**
 * @format
 */

import {Alert, AppRegistry} from 'react-native';
import App from './App';
import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
var Value1= 0;
var Value2 =0
const initialState = {
    counter1:0,
    counter2:0
}
const reducer = (state= initialState, Action) => {
    switch(Action.type){
        case 'INCREASE_COUNTER1':
            Alert.alert("Burger added to Cart")
            Value1++
            return {counter2:state.counter2, counter1: state.counter1+1}
        case 'INCREASE_COUNTER2':
            Alert.alert("Ribs added to Cart")
            Value2++
            return {counter2: state.counter2 +1, counter1:state.counter1}
        case 'DECREASE_COUNTER1':
            if (state.counter1 >0){
                Alert.alert('Burger removed from Cart')
                Value1--
                return{counter1: state.counter1 -1, counter2:state.counter2+0}
            }
        case 'DECREASE_COUNTER2':
                if (state.counter2 >0){
                    Alert.alert('Ribs removed from Cart')
                    Value2--
                    return{counter2: state.counter2 -1, counter1:state.counter1}
                }
    }
    return state

}
const store1 = createStore(reducer)
export default function Main(){
    return (
        <Provider store = {store1}>
            <PaperProvider>
                <App></App>
            </PaperProvider>
        </Provider>
    )
}
export{Value1}
export{Value2}

AppRegistry.registerComponent(appName, () => Main);
