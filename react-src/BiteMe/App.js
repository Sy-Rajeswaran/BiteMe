import {createStackNavigator, createAppContainer} from 'react-navigation';
import Welcome from './components/welcome';
import Payment from './components/payment';
import Checkout from './components/checkout';
import Menu from './components/Menu';
import Restaurants from './components/ListOfRestaurants';


const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Restaurants:{screen: Restaurants},
  Menu: {screen:Menu},
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
