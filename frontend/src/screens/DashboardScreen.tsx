import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import PersonalDataScreen from "./PersonalDataScreen";
import ProfileDataScreen from "./ProfileDataScreen";
import OrdersScreen from "./OrdersScreen";

const Tab = createBottomTabNavigator();

const DashboardScreen: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "PersonalData") {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "ProfileData") {
            return (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Orders") {
            return (
              <Ionicons
                name={focused ? "list-circle" : "list-circle-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "blueviolet",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name='PersonalData' component={PersonalDataScreen} />
      <Tab.Screen name='ProfileData' component={ProfileDataScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
