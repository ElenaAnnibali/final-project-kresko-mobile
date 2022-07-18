/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EntryItem from '../EntryItem';

// this needs to be rendered from 'records'

const renderItem = (entry) => {
  return <EntryItem entry={entry.item} />;
};

export default function EntryListScreen(props) {
  const [entries, setEntries] = useState([]);

  function onNewEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your journal entries</Text>
      <FlatList
        data={entries}
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={(item) => item.body}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.push('NewJournalEntry', { onNewEntry })}
      >
        <Text style={styles.buttonText}>New journal entry</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Account')}
      >
        <Text style={styles.buttonText}>Back to my account</Text>
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

  title: {
    fontFamily: 'Fascinate_400Regular',
    fontSize: 28,
    top: 40,
    textAlign: 'center',
  },

  list: {
    top: 60,
    marginBottom: 80,
  },

  button: {
    width: 260,
    height: 50,
    backgroundColor: '#9D71CA',
    borderWidth: 1,
    borderColor: '##262626',
    borderStyle: 'solid',
    borderRadius: 10,
    alignSelf: 'center',
    bottom: 10,
    marginBottom: 10,
  },

  buttonText: {
    top: 3,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
