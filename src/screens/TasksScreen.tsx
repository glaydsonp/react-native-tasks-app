import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { TaskModel } from "../models/TaskModel";
import TaskItem from "../components/TaskItem";

export default function TasksScreen({
  navigation,
}: RootTabScreenProps<"TasksTab">) {
  const myTasks: TaskModel[] = [
    {
      id: "1",
      title: "My Task 1",
      description: "This is the description of my task",
      isTaskDone: false,
      tags: ["Tag 1", "Tag 2"],
    },
    {
      id: "2",
      title: "My Task 2",
      description: "This is the description of my task",
      isTaskDone: false,
      tags: [],
      date: new Date().toISOString(),
    },
    {
      id: "3",
      title: "My Task 3",
      description:
        "This is the description of my task, but i need to test something with a longer text string to see if the box will break",
      isTaskDone: true,
      tags: ["Tag 2"],
      date: new Date().toISOString(),
    },
    {
      id: "4",
      title: "My Task 4",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "5",
      title: "My Task 5",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "6",
      title: "My Task 6",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "7",
      title: "My Task 7",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "8",
      title: "My Task 8",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "9",
      title: "My Task 9",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "10",
      title: "My Task 10",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "11",
      title: "My Task 11",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "12",
      title: "My Task 12",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "13",
      title: "My Task 13",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "14",
      title: "My Task 14",
      description: "This is the description of my task",
      isTaskDone: true,
    },
    {
      id: "15",
      title: "My Task 15",
      description: "This is the description of my task",
      isTaskDone: true,
    },
  ];

  const renderTaskItem = ({ item }) => {
    return <TaskItem task={item}></TaskItem>;
  };

  return (
    <FlatList
      style={{ backgroundColor: "#fff" }}
      data={myTasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id}
    />
    // <ScrollView style={styles.container}>
    //   {myTasks.map((task) => (
    //     <TaskItem key={task.id} task={task}></TaskItem>
    //   ))}
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
