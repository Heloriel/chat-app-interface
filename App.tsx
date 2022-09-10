import { NavigationContainer } from '@react-navigation/native';
import HomeContext from './src/contexts/HomeContext';
import {Router} from "./src/Router";

export default function App() {
  return (
    <NavigationContainer>
      <HomeContext>
        <Router />
      </HomeContext>
    </NavigationContainer>
  );
}