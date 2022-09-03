import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './screens/Index';

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Index} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}