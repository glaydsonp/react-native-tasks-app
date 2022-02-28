import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { RootStackParamList, RootTabParamList } from "../../types";
import { getHeaderTitle } from "@react-navigation/elements";
import CalendarIcon from "../icons/CalendarIcon";
import ListsIcon from "../icons/ListsIcon";
import MyDayIcon from "../icons/MyDayIcon";
import TasksActiveIcon from "../icons/TasksActiveIcon";
import TasksInactiveIcon from "../icons/TasksInactiveIcon";
import NotFoundScreen from "../screens/NotFoundScreen";
import MyDayScreen from "../screens/MyDayScreen";
import CalendarScreen from "../screens/CalendarScreen";
import TasksScreen from "../screens/TasksScreen";
import ListsScreen from "../screens/ListsScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import TabsBar from "../components/TabsBar";
import Header from "../components/Header";
import AddTaskScreen from "../screens/AddTaskScreen";

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
        <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const tabs: TabCollection[] = [
    {
      name: "MyDayTabScreen",
      component: MyDayScreen,
      title: "My Day",
      activeIcon: <MyDayIcon />,
      inactiveIcon: <MyDayIcon />,
    },
    {
      name: "CalendarTabScreen",
      component: CalendarScreen,
      title: "Calendar",
      activeIcon: <CalendarIcon />,
      inactiveIcon: <CalendarIcon />,
    },
    {
      name: "TasksTabScreen",
      component: TasksScreen,
      title: "Tasks",
      activeIcon: <TasksActiveIcon />,
      inactiveIcon: <TasksInactiveIcon />,
    },
    {
      name: "ListsTabScreen",
      component: ListsScreen,
      title: "Lists",
      activeIcon: <ListsIcon />,
      inactiveIcon: <ListsIcon />,
    },
  ];
  return (
    <BottomTab.Navigator
      initialRouteName="TasksTabScreen"
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

              return <Header title={title} navigation={navigation} />;
            },
            title: tab.title,
            tabBarIcon: () => tab.activeIcon,
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
}
