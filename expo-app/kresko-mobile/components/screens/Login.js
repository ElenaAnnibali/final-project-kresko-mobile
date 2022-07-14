/* eslint-disable @typescript-eslint/no-use-before-define */
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useState } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// import { userContext } from '../../util/Context';

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

  // const { setUser } = useContext(userContext);

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
      // setUser({
      //   id: loginResponseBody.user.id,
      // });
      navigation.push('Main');
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back on Kresko</Text>
      <Image
        source={require('../../assets/images/cloud.png')}
        style={styles.cloudImage}
      />
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
        {/* <Pressable
          onPress={() => {
            loginHandler().catch((e) => {
              console.log(e);
            });
          }}
        >
          <Button title="Sign up" onPress={() => navigation.navigate('Main')} />
        </Pressable> */}
        <Button
          title="Login"
          onPress={() => {
            loginHandler().catch((error) => {
              console.log(error);
            });
          }}
        />
        {errors.map((error) => (
          <Text style={styles.error} key={`error-${error.message}`}>
            {error.message}
          </Text>
        ))}
        <View style={styles.last} />
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
    top: 40,
    fontSize: 40,
    fontFamily: 'Fascinate_400Regular',
    textAlign: 'center',
    marginHorizontal: 5,
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

  error: {
    backgroundColor: '#2F0169',
    color: '#FFFAE9',
    fontFamily: 'Jost_400Regular',
    fontSize: 20,
    top: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    textAlign: 'center',
    borderRadius: 10,
    bottom: 10,
  },

  last: {
    paddingVertical: 50,
  },
});
