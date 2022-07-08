import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RelaxScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.h3}>
          Hello little human, I'm Prismo, and I will help you relax. Let's go
          now!
        </Text>
      </View>
      <LottieView source={require('./prismo.json')} autoPlay />
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

  h3: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    top: 40,
  },

  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});
