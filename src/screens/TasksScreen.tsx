import { FlatList, RefreshControl, ScrollView } from "react-native";
import { Text } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import TaskItem from "../components/TaskItem";
import { useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { TASKS_QUERY } from "../graphql/queries/TaskQueries";
import { useEffect, useState } from "react";

export default function TasksScreen({
  navigation,
}: RootTabScreenProps<"TasksTabScreen">) {
  const client = useApolloClient();

  const { data, loading, error, refetch } = useQuery(TASKS_QUERY);

  const cachedData = client.readQuery({
    query: TASKS_QUERY,
  });

  const renderTaskItem = ({ item }) => {
    return <TaskItem task={item}></TaskItem>;
  };

  if (!data && !cachedData) {
    return <Text>Data not defined</Text>;
  }

  if (!loading && data?.getToDos?.length === 0) {
    return <Text>There are currently no tasks.</Text>;
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }
      style={{ backgroundColor: "#fff" }}
      data={data?.getToDos || cachedData?.getToDos}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id}
    />
  );
}
