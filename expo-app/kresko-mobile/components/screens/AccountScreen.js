/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.homeScrollView}>
        {/* first card */}
        <Text style={styles.h3}>Username</Text>
        <View />
        {/* first card */}
        <Text style={styles.h2}>About you</Text>
        <View style={[styles.firstCard, styles.elevation]}>
          <Pressable onPress={() => props.navigation.navigate('Relax')}>
            <Image
              source={require('./aboutyou.png')}
              style={styles.journalImage}
            />
          </Pressable>
        </View>
        {/* second card */}
        <Text style={styles.h2}>Insights</Text>
        <View style={[styles.secondCard, styles.elevation]}>
          <Pressable onPress={() => props.navigation.navigate('Relax')}>
            <Image
              source={require('./insights.png')}
              style={styles.journalImage}
            />
          </Pressable>
        </View>
        {/* third card */}
        <Text style={styles.h2}>Records</Text>
        <View style={[styles.thirdCard, styles.elevation]}>
          <Pressable onPress={() => props.navigation.navigate('Relax')}>
            <Image
              source={require('./records.png')}
              style={styles.journalImage}
            />
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

  h2: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    top: 70,
    textAlign: 'center',
    // marginBottom: 5,
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

  firstCard: {
    width: 300,
    height: 260,
    top: 80,
    backgroundColor: '#FFFAE9',
    marginBottom: 50,
    borderRadius: 20,
  },

  secondCard: {
    width: 300,
    height: 260,
    top: 80,
    backgroundColor: '#FFEFF9',
    marginBottom: 50,
    borderRadius: 20,
  },

  thirdCard: {
    width: 300,
    height: 260,
    top: 80,
    backgroundColor: '#F3F8FF',
    marginBottom: 50,
    borderRadius: 20,
  },

  homeScrollView: {
    marginHorizontal: 20,
  },

  journalImage: {
    top: 35,
    marginBottom: 1,
    bottom: 60,
    width: 250,
    height: 220,
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
