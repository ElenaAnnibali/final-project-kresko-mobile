import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  animation: {
    top: 120,
  },

  h3: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    textAlign: 'center',
  },

  textContainer: {
    flex: 1,
    marginHorizontal: 10,
    top: 40,
    bottom: 40,
  },
});

export default function SadScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.h3}>
          I know, I know. Nobody likes to feel sad, but it's important to
          understand where this feeling is coming from.
        </Text>
        <Text style={styles.h3}>For now, seek comfort if you feel like.</Text>
        <Text style={styles.h3}>And remember: it's ok to cry.</Text>
      </View>
      <LottieView
        style={styles.animation}
        source={require('../../../assets/animations/mood-animations/sad.json')}
        autoPlay
      />
    </SafeAreaView>
  );
}
