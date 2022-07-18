import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    flex: 1,
  },

  firstContent: {
    top: 40,
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },

  content: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    top: 10,
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 5,
  },

  animation: {
    top: 150,
  },

  button: {
    top: 390,
    width: 280,
    height: 50,
    backgroundColor: '#9D71CA',
    borderWidth: 1,
    borderColor: '##262626',
    borderStyle: 'solid',
    borderRadius: 10,
    alignSelf: 'center',
    bottom: 2,
  },

  buttonText: {
    top: 3,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function SecondRelaxScreen(props) {
  const [entries, setEntries] = useState([[]]);

  function onNewEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }

  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <Text style={styles.firstContent}>Good job!</Text>
      <Text style={styles.content}>How was it? Could you relax a little?</Text>
      <Text style={styles.content}>
        Let's write your thoughts down or picture them on your journal!
      </Text>
      <Text style={styles.content}>Let's go!</Text>
      <LottieView
        source={require('../../../assets/animations/others/prismo.json')}
        progress={animationProgress.current}
        style={styles.animation}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.push('NewJournalEntry', { onNewEntry })}
      >
        <Text style={styles.buttonText}>Go to my personal journal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
