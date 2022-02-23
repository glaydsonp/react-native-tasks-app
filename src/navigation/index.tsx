/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { RootStackParamList, RootTabParamList } from "../../types";
import { getHeaderTitle } from "@react-navigation/elements";
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
import MyDayScreen from "../screens/MyDayScreen";
import CalendarScreen from "../screens/CalendarScreen";
import TasksScreen from "../screens/TasksScreen";
import ListsScreen from "../screens/ListsScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import { View } from "react-native";
import TabsBar from "../components/TabsBar";
import Colors from "../constants/Colors";
import Header from "../components/Header";

interface TabCollection {
  name: keyof RootTabParamList;
  component;
  title: string;
  activeIcon: JSX.Element;
  inactiveIcon: JSX.Element;
}

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
  const tabs: TabCollection[] = [
    {
      name: "MyDayTab",
      component: MyDayScreen,
      title: "My Day",
      activeIcon: <MyDayIcon />,
      inactiveIcon: <MyDayIcon />,
    },
    {
      name: "CalendarTab",
      component: CalendarScreen,
      title: "Calendar",
      activeIcon: <CalendarIcon />,
      inactiveIcon: <CalendarIcon />,
    },
    {
      name: "TasksTab",
      component: TasksScreen,
      title: "Tasks",
      activeIcon: <TasksActiveIcon />,
      inactiveIcon: <TasksInactiveIcon />,
    },
    {
      name: "ListsTab",
      component: ListsScreen,
      title: "Lists",
      activeIcon: <ListsIcon />,
      inactiveIcon: <ListsIcon />,
    },
  ];
  return (
    <BottomTab.Navigator
      initialRouteName="TasksTab"
      tabBar={(props) => <TabsBar {...props} />}
    >
      {tabs.map((tab) => (
        <BottomTab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);

              return <Header title={title} />;
            },
            title: tab.title,
            tabBarIcon: () => tab.activeIcon,
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
}
