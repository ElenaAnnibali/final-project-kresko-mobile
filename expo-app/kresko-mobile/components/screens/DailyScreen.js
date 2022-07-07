/* eslint-disable @typescript-eslint/no-use-before-define */
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function DailyScreen(props) {
  return (
    <View>
      <Text>Daily Screen</Text>
      <Pressable onPress={() => props.navigation.navigate('SignUp')}>
        <Text style={styles.signUpAnchor}>Sign up</Text>
      </Pressable>
      <Pressable onPress={() => props.navigation.navigate('SignIn')}>
        <Text style={styles.signUpAnchor}>Sign in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpAnchor: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
