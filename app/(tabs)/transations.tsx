import colors from '@/constants/colors';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function TransationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Transations!</Text>
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
