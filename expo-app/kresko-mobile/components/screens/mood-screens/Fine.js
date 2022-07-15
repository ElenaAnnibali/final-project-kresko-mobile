import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FineScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.h3}>
          Not good, not bad. Just fine. What's wrong with feeling fine?
        </Text>
        <Text style={styles.h3}>I'll tell you:</Text>
        <Text style={styles.h3}>
          Nothing, there is really nothing wrong with it.
        </Text>
      </View>
      {/* <LottieView
        style={styles.animation}
        source={require('../../../assets/animations/mood-animations/fine.json')}
        autoPlay
      /> */}
    </SafeAreaView>
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
