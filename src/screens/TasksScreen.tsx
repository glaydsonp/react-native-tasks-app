import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { TaskModel } from "../models/TaskModel";
import TaskItem from "../components/TaskItem";
import { useLazyQuery, useQuery } from "@apollo/client";
import { TASKS_QUERY } from "../graphql/queries/TaskQueries";
import { useEffect, useState } from "react";

export default function TasksScreen({
  navigation,
}: RootTabScreenProps<"TasksTab">) {
  const [loadTasks, { called, loading, data }] = useLazyQuery(TASKS_QUERY);

  useEffect(() => {
    loadTasks();
  }, []);

  if (called && loading) return <Text>Loading ...</Text>;

  const renderTaskItem = ({ item }) => {
    return <TaskItem task={item}></TaskItem>;
  };

  if (called && loading) {
    return <Text>Loading</Text>;
  }

  if (!data) {
    return <Text>Data not defined</Text>
  }

  if (!loading && data?.getToDos?.length === 0) {
    return <Text>There are currently no tasks.</Text>;
  }

  console.log(data);

  return (
    <FlatList
      style={{ backgroundColor: "#fff" }}
      data={data?.getToDos}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
