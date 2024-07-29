import colors from "@/constants/colors";
import {  IncomeType } from "@/types";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import { FlatList, ListRenderItem, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const IncomeBlock = ({incomeList}: {incomeList: IncomeType[]}) => {
  const renderItem: ListRenderItem<IncomeType> = ({item}) => {
    let icon = <Feather name="dollar-sign" size={22} color={colors.white} />;
    let amount = item.amount.split(".");

    if(item.name == "Freelancing") {
      icon = <SimpleLineIcons name="wallet" size={22} color={colors.white} />
    } else if(item.name == "Interest") {
      icon = <Feather name="plus-circle" size={22} color={colors.white} />
    }

    return (
      <View 
        style={{
          backgroundColor: colors.grey,
          padding: 20,
          borderRadius: 20,
          marginRight: 15,
          width: 150,
          gap: 10
        }}
      >
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <View style={{
            borderWidth: 1,
            borderColor: "#666",
            borderRadius: 50,
            padding: 5,
            alignSelf: "flex-start"
          }}>
            {icon}
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
        <Text style={{color: colors.white}}>{item.name}</Text>
        <Text style={{color: colors.white, fontSize: 18, fontWeight: "600"}}>
          ${amount[0]}.<Text style={{fontSize: 14, fontWeight: "400"}}>{amount[1]}</Text>
        </Text>
      </View>
    )
  }

  return (
    <View style={{paddingVertical: 20}}>
      <Text style={{color: colors.white, fontSize: 16, marginBottom: 20}}>
        My <Text style={{fontWeight: "700"}}>Income</Text>
      </Text>
      
      <FlatList 
        data={incomeList} 
        renderItem={renderItem} 
        horizontal 
        showsHorizontalScrollIndicator={false} 
      />
    </View>
  )
}

export default IncomeBlock;

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