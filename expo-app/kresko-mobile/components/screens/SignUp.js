/* eslint-disable @typescript-eslint/no-use-before-define */
import { useNavigation } from '@react-navigation/native';
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

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
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
        <Button title="Sign up" onPress={() => navigation.navigate('Main')} />
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
