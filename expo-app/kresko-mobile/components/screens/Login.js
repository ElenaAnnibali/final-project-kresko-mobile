/* eslint-disable @typescript-eslint/no-use-before-define */
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useState } from 'react';
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

const { manifest } = Constants;

const apiBaseUrl =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? `http://${manifest.debuggerHost.split(`:`).shift()}:3000/api/login`
    : 'https://api.example.com';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [errors, setErrors] = useState([]);

  async function loginHandler() {
    const loginResponse = await fetch(apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const loginResponseBody = await loginResponse.json();

    console.log('login body:', loginResponseBody);

    // if user exists: error
    if ('errors' in loginResponseBody) {
      setErrors(loginResponseBody.errors);
      return;
    } else {
      navigation.push('Main');
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back on Kresko</Text>
      <Image source={require('./cloud.png')} style={styles.cloudImage} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.h3}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="choose a username"
          onChangeText={setUsername}
        />
        <Text style={styles.h3}>Password</Text>
        <TextInput
          style={styles.inputLast}
          placeholder="Choose a password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {errors.map((error) => (
          <Text style={styles.text} key={`error-${error.message}`}>
            {error.message}
          </Text>
        ))}
        <Pressable
          onPress={() => {
            loginHandler().catch((e) => {
              console.log(e);
            });
          }}
        >
          <Button title="Sign up" onPress={() => navigation.navigate('Main')} />
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  scrollView: {
    height: '40%',
    width: '80%',
    // margin: 5,
    alignSelf: 'center',
    // padding: 5,
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

  cloudImage: {
    marginTop: 70,
    marginBottom: 40,
    width: 223.75,
    height: 114,
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
    marginBottom: 40,
  },
});
