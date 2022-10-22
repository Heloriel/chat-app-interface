import { NavigationContainer } from '@react-navigation/native';
import HomeContext from './src/contexts/HomeContext';
import {Router} from "./src/Router";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={"dark"} />
      <HomeContext>
        <Router />
      </HomeContext>
    </NavigationContainer>
  );
}