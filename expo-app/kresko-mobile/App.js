import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AccountScreen from './components/screens/AccountScreen';
import DailyScreen from './components/screens/DailyScreen';
import HomeScreen from './components/screens/HomeScreen';
import EntryListScreen from './components/screens/journal-screens/EntryListScreen';
import JournalScreen from './components/screens/journal-screens/JournalScreen';
import NewJournalEntryScreen from './components/screens/journal-screens/NewJournalEntryScreen';
import LoginScreen from './components/screens/Login';
import AngryScreen from './components/screens/mood-screens/Angry';
import FineScreen from './components/screens/mood-screens/Fine';
import GreatScreen from './components/screens/mood-screens/Great';
import LoveScreen from './components/screens/mood-screens/Love';
import MoodScreen from './components/screens/mood-screens/MoodScreen';
import SadScreen from './components/screens/mood-screens/Sad';
import TiredScreen from './components/screens/mood-screens/Tired';
import ProfileScreen from './components/screens/ProfileScreen';
import RecordsScreen from './components/screens/RecordsScreen';
import RegisterScreen from './components/screens/Register';
import FourthRelaxScreen from './components/screens/relax-screens/FourthRelaxScreen';
import RelaxScreen from './components/screens/relax-screens/RelaxScreen';
import SecondRelaxScreen from './components/screens/relax-screens/SecondRelaxScreen';
import ThirdRelaxScreen from './components/screens/relax-screens/ThirdRelaxScreen';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

// eslint-disable-next-line @typescript-eslint/naming-convention
const Tab = createBottomTabNavigator();
// eslint-disable-next-line @typescript-eslint/naming-convention
const Stack = createNativeStackNavigator();

function MainNavigator() {
  const homeIcon = ({ color }) => (
    <MaterialIcons
      name="home"
      color={color}
      size={29}
      style={{ marginTop: 1 }}
    />
  );

  const accountIcon = ({ color }) => (
    <MaterialIcons
      name="account-circle"
      color={color}
      size={29}
      style={{ marginTop: 1 }}
    />
  );

  const dailyIcon = ({ color }) => (
    <MaterialIcons
      name="opacity"
      color={color}
      size={29}
      style={{ marginTop: 1 }}
    />
  );

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
          tabBarIcon: homeIcon,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: accountIcon,
        }}
      />
      <Tab.Screen
        name="Daily"
        component={DailyScreen}
        options={{
          tabBarLabel: 'Daily',
          tabBarIcon: dailyIcon,
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
        initialRouteName="Home"
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Mood" component={MoodScreen} />
        <Stack.Screen name="Relax" component={RelaxScreen} />
        <Stack.Screen name="Angry" component={AngryScreen} />
        <Stack.Screen name="Sad" component={SadScreen} />
        <Stack.Screen name="Tired" component={TiredScreen} />
        <Stack.Screen name="Fine" component={FineScreen} />
        <Stack.Screen name="Great" component={GreatScreen} />
        <Stack.Screen name="Love" component={LoveScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="SecondRelax" component={SecondRelaxScreen} />
        <Stack.Screen name="ThirdRelax" component={ThirdRelaxScreen} />
        <Stack.Screen name="FourthRelax" component={FourthRelaxScreen} />
        <Stack.Screen name="EntryList" component={EntryListScreen} />
        <Stack.Screen
          name="NewJournalEntry"
          component={NewJournalEntryScreen}
        />
        <Stack.Screen name="Records" component={RecordsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
