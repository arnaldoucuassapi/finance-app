import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native';
import colors from '@/constants/colors';
import Header from '@/components/header';
import { Stack } from 'expo-router';
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from '@/components/expense-block';
import expenseList from '@/data/expenses.json';
import IncomeBlock from '@/components/income-block';
import incomeList from '@/data/incomes.json';
import SpendingBlock from '@/components/spending-block';
import spendingList from '@/data/spending.json';

export default function HomeScreen() {
  const pieData = [
    {
      value: 47,
      color: colors.tintColor,
      focused: true,
      text: "47%"
    },
    {
      value: 40,
      color: colors.brown,
      text: "40%"
    },
    {
      value: 16,
      color: colors.white,
      focused: true,
      text: "16%"
    },
    {
      value: 3,
      color: "#FFA5BA",
      gradientCenterColor: "#FF7F97",
      text: "4%"
    }
  ]
  return (
    <>
      <Stack.Screen options={{
        headerShown: true, 
        header: () => <Header />
      }}/>
      <View style={styles.container}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <View style={{gap: 10}}>
              <Text style={styles.text}>
                My <Text style={{fontWeight: "700"}}>Expenses</Text>
              </Text>
              <Text style={{color: colors.white, fontSize: 36, fontWeight: "700"}}>
                $1475.<Text style={{fontSize: 22, fontWeight: "400"}}>00</Text>
              </Text>
            </View>
            <View style={{paddingVertical: 20, alignItems: "center"}}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                focusOnPress
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={colors.black}
                centerLabelComponent={() => {
                  return (
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                      <Text style={{fontSize: 22, color: colors.white, fontWeight: "700"}}>47%</Text>
                    </View>
                  )
                }}
              ></PieChart>
            </View>
          </View>

          <ExpenseBlock expenseList={expenseList} />
          <IncomeBlock incomeList={incomeList} />
          <SpendingBlock spendingList={spendingList} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black, 
    paddingTop: 50, 
    paddingHorizontal: 20
  },
  text: {
    fontSize: 16,
    color: colors.white
  }
});
