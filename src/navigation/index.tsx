/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";

import AddIcon from "../icons/AddIcon";
import CalendarIcon from "../icons/CalendarIcon";
import FilterIcon from "../icons/FilterIcon";
import ListsIcon from "../icons/ListsIcon";
import MyDayIcon from "../icons/MyDayIcon";
import PeopleIcon from "../icons/PeopleIcon";
import SearchIcon from "../icons/SearchIcon";
import TasksActiveIcon from "../icons/TasksActiveIcon";
import TasksInactiveIcon from "../icons/TasksInactiveIcon";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import ListsScreen from "../screens/TabFourScreen";
import MyDayScreen from "../screens/TabOneScreen";
import TasksScreen from "../screens/TabThreeScreen";
import CalendarScreen from "../screens/TabTwoScreen";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="MyDayTab">
      <BottomTab.Screen
        name="MyDayTab"
        component={MyDayScreen}
        options={({ navigation }: RootTabScreenProps<"MyDayTab">) => ({
          title: "My Day",
          tabBarIcon: () => <MyDayIcon />,
          headerRight: () => (
            <>
              <SearchIcon />
              <FilterIcon />
              <PeopleIcon />
              <AddIcon />
            </>
          ),
        })}
      />
      <BottomTab.Screen
        name="CalendarTab"
        component={CalendarScreen}
        options={({ navigation }: RootTabScreenProps<"CalendarTab">) => ({
          title: "Calendar",
          tabBarIcon: () => <CalendarIcon />,
          headerRight: () => (
            <>
              <SearchIcon />
              <FilterIcon />
              <PeopleIcon />
              <AddIcon />
            </>
          ),
        })}
      />
      <BottomTab.Screen
        name="TasksTab"
        component={TasksScreen}
        options={{
          title: "Tasks",
          tabBarIcon: ({ focused }) =>
            focused ? <TasksActiveIcon /> : <TasksInactiveIcon />,
          headerRight: () => (
            <>
              <SearchIcon />
              <FilterIcon />
              <PeopleIcon />
              <AddIcon />
            </>
          ),
        }}
      />
      <BottomTab.Screen
        name="ListsTab"
        component={ListsScreen}
        options={{
          title: "Lists",
          tabBarIcon: () => <ListsIcon />,
          headerRight: () => (
            <>
              <SearchIcon />
              <FilterIcon />
              <PeopleIcon />
              <AddIcon />
            </>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
