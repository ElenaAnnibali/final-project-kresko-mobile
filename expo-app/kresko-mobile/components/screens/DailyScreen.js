import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, Text, View } from 'react-native';

export default function DailyScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.h3}>
          Let's try a simple breathing exercise together:
        </Text>
        <Text style={styles.h3}>
          when you're ready touch the screen and follow the instructions.
        </Text>
      </View>
      <LottieView
        style={styles.animation}
        source={require('../../assets/animations/others/breathing.json')}
        autoPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  animation: {
    top: 100,
  },

  h3: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    top: 80,
    textAlign: 'center',
  },

  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});
