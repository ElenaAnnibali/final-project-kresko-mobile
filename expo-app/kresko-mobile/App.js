import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AccountScreen from './components/screens/AccountScreen';
import DailyScreen from './components/screens/DailyScreen';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/Login';
import MoodScreen from './components/screens/MoodScreen';
import RegisterScreen from './components/screens/Register';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Tab = createBottomTabNavigator();
// eslint-disable-next-line @typescript-eslint/naming-convention
const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: '#2A015E',
        tabBarActiveBackgroundColor: '#2F0169',
        tabBarInactiveTintColor: '#FFFAE9',
        tabBarActiveTintColor: '#ffffff',
        tabBarIconStyle: { marginTop: 4 },
        tabBarLabelStyle: {
          fontSize: 13,
          color: '#FFFAE9',
          paddingBottom: 3,
        },
        tabBarStyle: {
          height: 55,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 4,
          borderTopWidth: 0,
        },
        style: { borderColor: '#011f3b' },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="home"
              color={color}
              size={29}
              style={{ marginTop: 1 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="account-circle"
              color={color}
              size={29}
              style={{ marginTop: 1 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Daily"
        component={DailyScreen}
        options={{
          tabBarLabel: 'Daily',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="opacity"
              color={color}
              size={29}
              style={{ marginTop: 1 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Mood" component={MoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
