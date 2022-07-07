/* eslint-disable @typescript-eslint/no-use-before-define */
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MoodScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>Hello, how are how today?</Text>
      <Pressable onPress={() => props.navigation.navigate('SignIn')}>
        <Image source={require('./sad.png')} style={styles.moodImage} />
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate('SignUp')}>
        <Image source={require('./angry.png')} style={styles.moodImage} />
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate('SignIn')}>
        <Image source={require('./tired.png')} style={styles.moodImage} />
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate('SignIn')}>
        <Image source={require('./fine.png')} style={styles.moodImage} />
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate('SignIn')}>
        <Image source={require('./great.png')} style={styles.moodImage} />
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate('SignIn')}>
        <Image source={require('./love.png')} style={styles.moodImage} />
      </Pressable>
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
