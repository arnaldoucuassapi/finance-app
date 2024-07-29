import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import colors from '@/constants/colors';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.grey,
            position: "absolute",
            bottom: 60,
            justifyContent: "center",
            alignSelf: "center",
            height: 64,
            marginHorizontal: 80,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#333",
            borderTopColor: "#333",
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: colors.white,
        }}

      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                padding: 12,
                borderRadius: 30,
                backgroundColor: focused ? colors.tintColor : colors.grey
              }}>
                <Feather name="pie-chart" size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="transations"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                padding: 12,
                borderRadius: 30,
                backgroundColor: focused ? colors.tintColor : colors.grey
              }}>
                <AntDesign name="swap" size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                padding: 12,
                borderRadius: 30,
                backgroundColor: focused ? colors.tintColor : colors.grey
              }}>
                <FontAwesome name="user-o" size={18} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light"  translucent />
    </>
  );
}
