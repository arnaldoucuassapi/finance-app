import colors from "@/constants/colors";
import { ExpenseType } from "@/types";
import { Feather } from "@expo/vector-icons";
import { FlatList, ListRenderItem, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ExpenseBlock = ({expenseList}: {expenseList: ExpenseType[]}) => {
  const renderItem: ListRenderItem<ExpenseType> = ({item, index}) => {
    if(index == 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addItemBtn}>
            <Feather name="plus" size={22} color={"#ccc"} />
          </View>
        </TouchableOpacity>
      )
    }

    let amount = item.amount.split(".");

    return (
      <View 
        style={[
          styles.expenseBlock, 
          {
            backgroundColor: 
              item.name == "Food" 
              ? colors.brown 
              : item.name == "Miscleneous" 
              ? colors.red
              : item.name == "Saving" 
              ? colors.white 
              : colors.tintColor
          }
        ]}
      >
        <Text 
          style={[
            styles.expenseBlockTxt1, 
            {
              color: 
                item.name == "Food" 
                ? colors.black 
                : item.name == "Saving" 
                ? colors.black 
                : colors.white
            }
          ]}
        >
          {item.name}
        </Text>
        <Text 
          style={[
            styles.expenseBlockTxt2, 
            {
              color: 
                item.name == "Food" 
                ? colors.black 
                : item.name == "Saving" 
                ? colors.black 
                : colors.white
            }
          ]}
        >
          ${amount[0]}.<Text style={styles.expenseBlockTxt2Span}>{amount[1]}</Text>
        </Text>
        <View style={styles.expenseBlock3View}>
          
        <Text 
          style={[
            styles.expenseBlockTxt1, 
            {
              color: 
                item.name == "Food" 
                ? colors.black 
                : item.name == "Saving" 
                ? colors.black 
                : colors.white
            }
          ]}
        >
          {item.percentage}%
        </Text>
        </View>
      </View>
    )
  }

  const staticItem = [{id: "",name: "Add Item",amount: "",percentage: ""}];

  return (
    <View style={{paddingVertical: 20}}>
      <FlatList 
        data={staticItem.concat(expenseList)} 
        renderItem={renderItem} 
        horizontal 
        showsHorizontalScrollIndicator={false} 
      />
    </View>
  )
}

export default ExpenseBlock;

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