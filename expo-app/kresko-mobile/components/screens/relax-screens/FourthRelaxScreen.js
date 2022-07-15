import LottieView from 'lottie-react-native';
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SecondRelaxScreen(props) {
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
      <Text style={styles.firstContent}>Good job!</Text>
      <Text style={styles.content}>How was it? Could you relax a little?</Text>
      <Text style={styles.content}>
        Let's write your thoughts down or picture them on your journal!
      </Text>
      <Text style={styles.lastContent}>Let's go!</Text>
      <LottieView
        source={require('../../../assets/animations/others/prismo.json')}
        progress={animationProgress.current}
        style={styles.animation}
      />
      <Pressable
        style={styles.lastPressable}
        onPress={() => props.navigation.navigate('Journal')}
      >
        <Text style={styles.h3}>Go to my personal journal</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    flex: 1,
  },

  h3: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    top: 40,
    textAlign: 'center',
  },

  card: {
    width: 300,
    height: 440,
    marginTop: 80,
    backgroundColor: '#FFEFF9',
    marginBottom: 10,
    borderRadius: 20,
  },

  elevation: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
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

  lastContent: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    top: 10,
    textAlign: 'center',
    marginHorizontal: 5,
  },

  animation: {
    top: 150,
  },

  lastPressable: {
    top: 300,
  },
});
