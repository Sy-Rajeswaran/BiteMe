import {createStackNavigator, createAppContainer} from 'react-navigation';
import Welcome from './components/welcome';

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome}
}, 
{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
}}
);

const App = createAppContainer(MainNavigator);

export default App;
