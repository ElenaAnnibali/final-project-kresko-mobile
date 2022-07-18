/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecordsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('EntryList')}
      >
        <Text style={styles.buttonText}>Go to journal records</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('EntryList')}
      >
        <Text style={styles.buttonText}>Go to mood records</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    top: 50,
    marginBottom: 50,
    width: 260,
    height: 50,
    backgroundColor: '#9D71CA',
    borderWidth: 1,
    borderColor: '##262626',
    borderStyle: 'solid',
    borderRadius: 10,
    alignSelf: 'center',
    bottom: 2,
    // top: 10,
  },

  buttonText: {
    top: 3,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
