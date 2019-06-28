/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main(){
    return (
        <PaperProvider>
            <App></App>
        </PaperProvider>
    )
}


AppRegistry.registerComponent(appName, () => Main);