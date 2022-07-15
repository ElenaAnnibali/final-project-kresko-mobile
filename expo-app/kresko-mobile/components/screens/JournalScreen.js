/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function JournalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h3}>Welcome to your personal journal</Text>
      <Image
        source={require('../../assets/images/personalJournal.png')}
        style={styles.image}
      />
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to the journal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  h3: {
    fontFamily: 'Fascinate_400Regular',
    fontSize: 24,
    top: 40,
    textAlign: 'center',
  },

  button: {
    width: 260,
    height: 50,
    backgroundColor: '#9D71CA',
    borderWidth: 1,
    borderColor: '#262626',
    borderStyle: 'solid',
    borderRadius: 10,
    alignSelf: 'center',
    bottom: 2,
    top: 150,
  },

  buttonText: {
    top: 3,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    top: 50,
    height: 200,
    width: 355,
    padding: 10,
    backgroundColor: '#FFFAE9',
    borderWidth: 1,
    borderColor: '#262626',
    borderStyle: 'solid',
    borderRadius: 10,
  },

  image: {
    top: 40,
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
