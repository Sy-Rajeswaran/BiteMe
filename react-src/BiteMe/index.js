/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MyComponent from './components/navigation';
import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main(){
    return (
        <PaperProvider>
            <MyComponent></MyComponent>
            <App></App>
        </PaperProvider>
    )
}


AppRegistry.registerComponent(appName, () => Main);
