import {createStackNavigator, createAppContainer} from 'react-navigation';
import Welcome from './components/welcome';
import Payment from './components/payment';
import Checkout from './components/checkout';

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Payment: {screen: Payment},
  Checkout: {screen:Checkout}
}, 
{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
}}
);

const App = createAppContainer(MainNavigator);

export default App;
