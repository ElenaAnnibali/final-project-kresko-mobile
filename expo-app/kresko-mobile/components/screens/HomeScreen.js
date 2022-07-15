/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.homeScrollView}>
        {/* first card */}
        <View style={[styles.subContainer, styles.elevation]}>
          <Text style={styles.h3}>How are you felling today?</Text>
          <Pressable onPress={() => props.navigation.navigate('Mood')}>
            <Text style={styles.moodSubtitle}>Let's check your mood!</Text>
          </Pressable>
        </View>
        {/* second card */}
        <View style={[styles.card, styles.elevation]}>
          <Pressable onPress={() => props.navigation.navigate('Journal')}>
            <Image
              source={require('../../assets/images/journal.png')}
              style={styles.journalImage}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Your personal journal</Text>
            </TouchableOpacity>
          </Pressable>
        </View>
        {/* third card */}
        <View style={[styles.card, styles.elevation]}>
          <Pressable onPress={() => props.navigation.navigate('Relax')}>
            <Image
              source={require('../../assets/images/meditation.png')}
              style={styles.journalImage}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Take a moment to relax</Text>
            </TouchableOpacity>
          </Pressable>
        </View>
        <View style={styles.lastCard} />
      </ScrollView>
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

  subContainer: {
    // flex: 1,
    top: 40,
    backgroundColor: '#F7E7FF',
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
    height: 120,
    borderWidth: 1,
    borderColor: '##262626',
    borderStyle: 'solid',
    borderRadius: 15,
  },

  h3: {
    fontFamily: 'Jost_400Regular',
    fontSize: 20,
    top: 20,
  },

  moodSubtitle: {
    fontFamily: 'Jost_400Regular',
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },

  elevation: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  card: {
    width: 300,
    height: 320,
    top: 80,
    backgroundColor: '#FFEFF9',
    marginBottom: 50,
    borderRadius: 20,
  },

  homeScrollView: {
    marginHorizontal: 20,
  },

  journalImage: {
    top: 5,
    marginBottom: 1,
    bottom: 60,
    width: 380,
    height: 240,
    alignSelf: 'center',
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

  lastCard: {
    height: 150,
  },
});
