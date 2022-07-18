/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewJournalEntryScreen({ route, navigation }) {
  const [body, onChangeBody] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My personal journal</Text>
      <Image
        source={require('../../../assets/images/personalJournal.png')}
        style={styles.image}
      />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeBody}
          placeholder="Write something here or describe it with emojis"
          value={body}
        />
        <Button
          title="Add to the journal"
          onPress={() => {
            route.params.onNewEntry({
              body,
              createdAt: new Date(),
            });
            // navigation.goBack();
            navigation.navigate('EntryList');
          }}
        />
        {/* <Button
          title="go to my records"
          onPress={() => navigation.navigate('EntryList')}
        /> */}
      </View>
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

  title: {
    fontFamily: 'Fascinate_400Regular',
    fontSize: 28,
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
    marginBottom: 90,
  },

  image: {
    top: 40,
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
