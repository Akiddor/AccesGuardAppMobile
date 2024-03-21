import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import HistoryAccess from "./src/screens/HistoryAccess";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [notificationCount, setNotificationCount] = useState(10);

  const increaseNotificationCount = () => {
    setNotificationCount(notificationCount + 1);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tab.Screen name="User" component={Profile}
      initialRouteName="User"
      options={{
        tabBarIcon: ({color,size}) =>(
          <FontAwesome6 name="user-large" size={28} color="#302c9b" />
        ),
        headerShown: false,
      }}
      
      
      />
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ increaseNotificationCount }}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={28} color="#302c9b" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen name="HistoryAccess" component={HistoryAccess}
      options={{
        tabBarIcon: ({color,size}) => (
          <Octicons name="history" size={28} color="#302c9b" />
        ),
        tabBarBadge: notificationCount > 0 ? notificationCount : null,
        headerShown: false,
      }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
      <MyTabs />
  );
}
