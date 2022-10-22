import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './screens/Index';
import Home from './screens/Home';
import Chat from './screens/Chat';
import {NavigationParamsList} from './@types/types';

const MainStack = createNativeStackNavigator<NavigationParamsList>();
const { Navigator, Screen } = MainStack;


export function Router() {
  return (
    <Navigator initialRouteName='index'>
      <Screen name="index" component={Index} options={{headerShown: false}}  />
      <Screen name="home" component={Home} options={{headerShown: false}} />
      <Screen name="chat" component={Chat} options={{headerShown: false}} />
    </Navigator>
  );
}