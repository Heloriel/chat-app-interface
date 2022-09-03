import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './screens/Index';
import Home from './screens/Home';

type RootStackParamList = {
  Index: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <Stack.Navigator initialRouteName='Index'>
      <Stack.Screen name="Index" component={Index} options={{headerShown: false}}  />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}