import Constants from 'expo-constants';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  h2: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    top: 20,
    textAlign: 'center',
    marginBottom: 15,
  },

  moodImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 10,
  },
});

const { manifest } = Constants;

const apiBaseUrl =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? `http://${manifest.debuggerHost.split(`:`).shift()}:3000/api/mood`
    : 'https://api.example.com';

export default function MoodScreen(props) {
  const [errors, setErrors] = useState([]);
  const [sadMood, setSadMood] = useState('');
  const [angryMood, setAngryMood] = useState('');
  const [tiredMood, setTiredMood] = useState('');
  const [fineMood, setFineMood] = useState('');
  const [greatMood, setGreatMood] = useState('');
  const [loveMood, setLoveMood] = useState('');

  async function moodHandler() {
    const moodResponse = await fetch(apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mood:
          sadMood ||
          angryMood ||
          tiredMood ||
          fineMood ||
          greatMood ||
          loveMood,
      }),
    });

    const moodResponseBody = await moodResponse.json();

    // console.log(moodResponseBody);

    if ('errors' in moodResponseBody) {
      setErrors(moodResponseBody.errors);
      return;
    } else if (sadMood === 'sad') {
      props.navigation.push('Sad');
      return;
    } else if (angryMood) {
      props.navigation.push('Angry');
      return;
    } else if (tiredMood) {
      props.navigation.push('Tired');
      return;
    } else if (fineMood) {
      props.navigation.push('Fine');
      return;
    } else if (greatMood) {
      props.navigation.push('Great');
      return;
    } else if (loveMood) {
      props.navigation.push('Love');
      return;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>Hello, how are you today?</Text>
      <Pressable onPress={() => setSadMood('sad')}>
        <Pressable
          // onPress={() => {
          //   moodHandler().catch((error) => {
          //     console.log(error);
          //   });
          // }}
          onPress={() => props.navigation.navigate('Sad')}
        >
          <Image
            source={require('../../../assets/images/mood/sad.png')}
            style={styles.moodImage}
          />
        </Pressable>
      </Pressable>
      <Pressable onPress={() => setAngryMood('angry')}>
        <Pressable
          // onPress={() => {
          //   moodHandler().catch((error) => {
          //     console.log(error);
          //   });
          // }}
          onPress={() => props.navigation.navigate('Angry')}
        >
          <Image
            source={require('../../../assets/images/mood/angry.png')}
            style={styles.moodImage}
          />
        </Pressable>
      </Pressable>
      <Pressable onPress={() => setTiredMood('tired')}>
        <Pressable
          // onPress={() => {
          //   moodHandler().catch((error) => {
          //     console.log(error);
          //   });
          // }}
          onPress={() => props.navigation.navigate('Tired')}
        >
          <Image
            source={require('../../../assets/images/mood/tired.png')}
            style={styles.moodImage}
          />
        </Pressable>
      </Pressable>
      <Pressable
        // onPress={() => {
        //   moodHandler().catch((error) => {
        //     console.log(error);
        //   });
        // }}
        onPress={() => props.navigation.navigate('Fine')}
      >
        <Image
          source={require('../../../assets/images/mood/fine.png')}
          style={styles.moodImage}
        />
      </Pressable>
      <Pressable onPress={() => setGreatMood('great')}>
        <Pressable
          // onPress={() => {
          //   moodHandler().catch((error) => {
          //     console.log(error);
          //   });
          // }}
          onPress={() => props.navigation.navigate('Great')}
        >
          <Image
            source={require('../../../assets/images/mood/great.png')}
            style={styles.moodImage}
          />
        </Pressable>
      </Pressable>
      <Pressable onPress={() => setLoveMood('love')}>
        <Pressable
          // onPress={() => {
          //   moodHandler().catch((error) => {
          //     console.log(error);
          //   });
          // }}
          onPress={() => props.navigation.navigate('Love')}
        >
          <Image
            source={require('../../../assets/images/mood/love.png')}
            style={styles.moodImage}
          />
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
}
