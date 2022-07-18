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

export default function TiredScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.h3}>
          What is this weird feeling that makes you so grumpy?
        </Text>
        <Text style={styles.h3}>
          You're most probably tired, or a bit overwhelmed.
        </Text>
        <Text style={styles.h3}>
          Resting might sounds boring, but it will help you feeling better.
        </Text>
        <Text style={styles.h3}>So, what about a power nap?</Text>
      </View>
      <LottieView
        style={styles.animation}
        source={require('../../../assets/animations/mood-animations/tired.json')}
        autoPlay
      />
    </SafeAreaView>
  );
}
