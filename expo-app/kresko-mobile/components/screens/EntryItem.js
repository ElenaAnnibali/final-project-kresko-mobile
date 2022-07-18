import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  right: {
    textAlign: 'right',
    fontFamily: 'Jost_400Regular',
    fontSize: 18,
  },
  center: {
    textAlign: 'center',
    fontFamily: 'Jost_400Regular',
    fontSize: 20,
  },
  card: {
    backgroundColor: '#FFFAE9',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 30,
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '##262626',
    borderStyle: 'solid',
    borderRadius: 20,
  },
});

export default function EntryItem({ entry }) {
  const { body, createdAt } = entry;
  return (
    <View style={styles.card}>
      <Text style={styles.center}>{body}</Text>
      <Text style={styles.right}>
        {new Date(createdAt).toLocaleDateString()}
      </Text>
    </View>
  );
}
