/* eslint-disable @typescript-eslint/no-use-before-define */
import { useRef } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SecondRelaxScreen(props) {
  // text animation
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.animationContainer}>
      <TouchableOpacity onPress={fadeIn}>
        <Text style={styles.h3}>Tap here to start</Text>

        <Animated.View
          style={[styles.card, styles.elevation, { opacity: fadeAnimation }]}
        >
          <Text style={styles.firstContent}>Good job! </Text>
          <Text style={styles.content}>
            Now: slowly close your eyes and let your thoughts go wherever they
            want to go.
          </Text>
          <Text style={styles.content}>Stay there as long as you want to.</Text>
          <Text style={styles.content}>
            Then you're done gently open your eyes.
          </Text>
        </Animated.View>
      </TouchableOpacity>
      <Pressable
        style={styles.lastPressable}
        onPress={() => props.navigation.navigate('FourthRelax')}
      >
        <Text style={styles.h3}>
          When you're ready, tap here to continue the exercise
        </Text>
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
    top: 20,
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 50,
  },

  content: {
    fontFamily: 'Jost_400Regular',
    fontSize: 24,
    top: 10,
    textAlign: 'center',
    marginBottom: 50,
    marginHorizontal: 5,
  },

  lastPressable: {
    top: 10,
  },
});
