import {createStackNavigator, createAppContainer} from 'react-navigation';
import Welcome from './components/welcome';
import Payment from './components/payment';

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Payment: {screen: Payment}
}, 
{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
}}
);

const App = createAppContainer(MainNavigator);

export default App;
