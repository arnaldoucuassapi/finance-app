import { StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '@/constants/colors';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black
  },
  text: {
    color: colors.white
  }
});
