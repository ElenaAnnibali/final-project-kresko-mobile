import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RelaxScreen(props) {
  // const animation = useRef(null);
  const animationProgress = useRef(new Animated.Value(0));
  // useEffect(() => {
  //   // You can control the ref programmatically, rather than using autoPlay
  //   animation.current?.play();
  // }, []);

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
      <Pressable onPress={() => props.navigation.navigate('SecondRelax')}>
        <View style={styles.textContainer}>
          <Text style={styles.firstContent}>
            Hello little human, I'm Prismo, and I will help you relax.
          </Text>
          <Text style={styles.secondContent}>Let's go now!</Text>
        </View>
        <LottieView
          source={require('../../../assets/animations/others/prismo.json')}
          progress={animationProgress.current}
        />
        <Text style={styles.thirdContent}>
          Tap anywhere on the screen to follow me.
        </Text>
      </Pressable>
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

  firstContent: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    top: 40,
    textAlign: 'center',
  },

  secondContent: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    top: 60,
    textAlign: 'center',
  },

  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },

  thirdContent: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    bottom: 50,
    textAlign: 'center',
  },
});
