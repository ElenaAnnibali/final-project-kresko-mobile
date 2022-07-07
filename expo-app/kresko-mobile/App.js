import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from './components/screens/AccountScreen';
import DailyScreen from './components/screens/DailyScreen';
import HomeScreen from './components/screens/HomeScreen';
import MoodScreen from './components/screens/MoodScreen';
import SignInScreen from './components/screens/SignIn';
import SignUpScreen from './components/screens/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Daily" component={DailyScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  console.log('test');
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Mood" component={MoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
