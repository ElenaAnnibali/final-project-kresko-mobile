import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoveScreen() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    animation.current?.play();
  }, []);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.h3}>
          There is nothing better than being in love and being loved back.
        </Text>
        <Text style={styles.h3}>
          Learning how to love yourself is a very powerfull tool.
        </Text>
        <Text>
          This means being kind with ourself and having a positive attitude
          towards our own diffiulties.
        </Text>
        <Text style={styles.h3}>
          For now, give yourself a hug, you deserve it!
        </Text>
      </View>
      <LottieView
        style={styles.animation}
        source={require('./love.json')}
        autoPlay
      />
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
