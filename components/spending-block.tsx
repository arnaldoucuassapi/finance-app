import colors from "@/constants/colors";
import { SpendingType } from "@/types";
import { Feather, FontAwesome, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

const SpendingBlock = ({spendingList}: {spendingList: SpendingType[]}) => {
  return (
    <View style={{paddingVertical: 20, alignItems: "flex-start"}}>
      <Text style={{color: colors.white, fontSize: 16, marginBottom: 20}}>
        July <Text style={{fontWeight: "700"}}>Spending</Text>
      </Text>
      
      {spendingList.map((item) => {
        let icon = <Octicons name="home" size={22} color={colors.white} />;

        if(item.name == "Netflix") {
          icon = <MaterialCommunityIcons name="netflix" size={22} color={colors.white} />
        } else if(item.name == "Spotify") {
          icon = <MaterialCommunityIcons name="spotify" size={22} color={colors.white} />
        } else if(item.name == "Amazon") {
          icon = <FontAwesome name="amazon" size={22} color={colors.white} />
        } else if(item.name == "Figma") {
          icon = <Feather name="figma" size={22} color={colors.white} />
        } else if(item.name == "Online Shopping") {
          icon = <MaterialCommunityIcons name="shopping" size={22} color={colors.white} />
        }

        return (
          <View 
            key={item.id} 
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10
            }}
          >
            <View 
              style={{
                backgroundColor: colors.grey, 
                padding: 15, 
                borderRadius: 50,
                alignSelf: "flex-start"
              }}
            >
              {icon}
            </View>
            <View 
              style={{
                flex: 1, 
                flexDirection: "row", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginLeft: 15
              }}
            >
              <View style={{gap: 5}}>
                <Text style={{color: colors.white, fontSize: 16, fontWeight: "600"}}>{item.name}</Text>
                <Text style={{color: colors.white}}>{item.date}</Text>
              </View>
              <Text style={{color: colors.white}}>
                ${item.amount}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default SpendingBlock;

const styles = StyleSheet.create({
  expenseBlock: {
    backgroundColor: colors.tintColor,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  expenseBlockTxt1: {
    color: colors.white,
    fontSize: 14,
  },
  expenseBlockTxt2: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600"
  },
  expenseBlockTxt2Span: {
    fontSize: 12
  },
  expenseBlock3View: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
  addItemBtn: {
    flex: 1,
    borderWidth: 2, 
    borderStyle: "dashed", 
    borderColor: "#666", 
    borderRadius: 10, 
    marginRight: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});