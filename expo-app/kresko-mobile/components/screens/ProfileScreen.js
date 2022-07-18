import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDDBFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  subcontainer: {
    top: 40,
    paddingVertical: 100,
  },

  h3: {
    fontFamily: 'Jost_400Regular',
    fontSize: 20,
    top: 20,
  },

  homeScrollView: {
    marginHorizontal: 20,
  },
});
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View stlyes={styles.subcontainer}>
        <Text style={styles.h3}>Hello</Text>
      </View>
    </SafeAreaView>
  );
}
