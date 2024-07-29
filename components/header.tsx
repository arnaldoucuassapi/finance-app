import colors from "@/constants/colors";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.infoContainer}>
          <Image source={{uri: "https://github.com/arnaldoucuassapi.png"}} style={styles.image} />
          <View style={{marginLeft: 10}}>
            <Text style={[styles.text]}>Hi, Arnaldo Ucuassapi</Text>
            <Text style={[styles.text, {fontSize: 16}]}>
              Your <Text style={{fontWeight: "700"}}>Badget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>My Transations</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }, 
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  button: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10,
    padding: 8,
  },
  text: {
    fontSize: 12,
    color: colors.white
  }
})