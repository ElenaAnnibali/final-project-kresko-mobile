import { Fascinate_400Regular, Jost_400Regular } from '@expo-google-fonts/dev';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { manifest } = Constants;

const apiBaseUrl =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? `http://${manifest.debuggerHost.split(`:`).shift()}:3000/api/register`
    : 'https://api.example.com';

export default function RegisterScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [appIsReady, setAppIsReady] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({ Fascinate_400Regular, Jost_400Regular });

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare().catch((error) => {
      console.log(error);
    });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  async function registerHandler() {
    const registerResponse = await fetch(apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const registerResponseBody = await registerResponse.json();

    console.log(registerResponseBody);

    // if user exists: error
    if ('errors' in registerResponseBody) {
      setErrors(registerResponseBody.errors);
      return;
    } else {
      props.navigation.push('Main');
      return;
    }
  }

  return (
    <SafeAreaView style={signInStyles.container} onLayout={onLayoutRootView}>
      <Text style={signInStyles.title}>Welcome on Kresko</Text>
      <Image source={require('./image.png')} style={signInStyles.image} />

      <ScrollView
        style={signInStyles.scrollView}
        contentContainerStyle={signInStyles.contentContainer}
      >
        {/* <Text style={styles.h3}>Create account for</Text>
        <TextInput
          style={styles.input}
          placeholder="Are you teacher or a student?"
          onChangeText={setUserType}
        /> */}
        <Text style={signInStyles.h3}>Username</Text>
        <TextInput
          style={signInStyles.input}
          placeholder="choose a username"
          value={username}
          onChangeText={setUsername}
        />
        {/* <Text style={styles.h3}>Class</Text>
        <TextInput
          style={styles.input}
          placeholder="select a class"
          onChangeText={setSchoolClass}
        /> */}
        <Text style={signInStyles.h3}>Password</Text>
        <TextInput
          style={signInStyles.inputLast}
          placeholder="Choose a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {/* <Text style={styles.h3}>Confirm password</Text>
        <TextInput
          style={styles.inputLast}
          placeholder="Choose a password"
          onChangeText={setPassword}
          secureTextEntry={true}
          // onSubmitEditing={confirmPasswordsMatch}
        /> */}
        {errors.map((error) => (
          <Text key={`error-${error.message}`}>{error.message}</Text>
        ))}
        <Button
          title="Create account"
          onPress={() => {
            registerHandler().catch((error) => {
              console.log(error);
            });
          }}
        />
      </ScrollView>
      <View style={signInStyles.thirdContainer}>
        <Text style={signInStyles.h4}>Already have an account?</Text>
        <Pressable onPress={() => props.navigation.navigate('Login')}>
          <Text style={signInStyles.signUpAnchor}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const signInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  title: {
    top: 20,
    fontSize: 40,
    fontFamily: 'Fascinate_400Regular',
    textAlign: 'center',
  },

  h3: {
    fontFamily: 'Jost_400Regular',
    fontSize: 20,
    top: 20,
  },

  image: {
    top: 20,
    marginBottom: 10,
    bottom: 20,
    width: 160,
    height: 160,
  },

  input: {
    height: 40,
    borderBottomWidth: 1,
    top: 10,
  },

  inputLast: {
    height: 40,
    borderBottomWidth: 1,
    top: 10,
    marginBottom: 50,
  },

  scrollView: {
    height: '40%',
    width: '80%',
    // margin: 5,
    alignSelf: 'center',
    // padding: 5,
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },

  thirdContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 20,
    bottom: 15,
  },

  h4: {
    top: 10,
    fontSize: 18,
  },

  signUpAnchor: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
