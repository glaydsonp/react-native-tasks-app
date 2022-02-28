import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TaskModel } from "../models/TaskModel";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DateIcon from "../icons/DateIcon";
import HourIcon from "../icons/HourIcon";
import CommentsIcon from "../icons/CommentsIcon";
import RecurringIcon from "../icons/RecurringIcon";
import formatDate from "../utils/formatDate";

import { Dimensions } from "react-native";
import { UPDATE_TASK_MUTATION } from "../graphql/mutations/UpdateTaskMutation";
import { useMutation } from "@apollo/client";
import { TASKS_QUERY } from "../graphql/queries/TaskQueries";

interface TaskItemProps {
  task: TaskModel;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [updateTask, { data, loading, error }] = useMutation(
    UPDATE_TASK_MUTATION,
    {
      update: (cache, mutationResult) => {
        const updatedTask = mutationResult.data.updateToDo;

        const cachedQueryData = cache.readQuery<{ getToDos: TaskModel[] }>({
          query: TASKS_QUERY,
        });

        cachedQueryData.getToDos.forEach((toDo) => {
          if (toDo.id === updatedTask.id) {
            toDo = updatedTask;
          }
        });

        cache.writeQuery({
          query: TASKS_QUERY,
          data: {
            getToDos: cachedQueryData.getToDos,
          },
        });
      },
    }
  );

  const [isTaskDone, setIsTaskDone] = useState(task.isTaskDone);

  const toggleTaskStatus = () => {
    console.log(task);
    setIsTaskDone((isTaskDone) => !isTaskDone);

    updateTask({
      variables: {
        toDoId: task.id,
        toDoInput: {
          title: task.title,
          description: task.description,
          isTaskDone: !task.isTaskDone,
          tags: task.tags,
          date: task.date,
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textDecorationLine: isTaskDone ? "line-through" : "none",
            fontWeight: "bold",
            maxWidth: Dimensions.get("window").width - 100,
          }}
        >
          {task.description}
        </Text>
        {!!task.date && (
          <View style={styles.extraOptionsContainer}>
            <View style={styles.extraOptionsContainer}>
              {!!task.date && (
                <>
                  <DateIcon />
                  <Text style={{ marginLeft: 5 }}>
                    {formatDate(task.date, "dd MMM")}
                  </Text>
                </>
              )}
            </View>
            <View style={styles.extraOptionsContainer}>
              {!!task.date && (
                <>
                  <HourIcon />
                  <Text style={{ marginLeft: 5 }}>
                    {formatDate(task.date, "HH:mm")}
                  </Text>
                </>
              )}
            </View>
            {/* <View style={styles.extraOptionsContainer}>
              {task.date && <CommentsIcon />}
            </View>
            <View style={styles.extraOptionsContainer}>
              {task.date && <RecurringIcon />}
            </View> */}
          </View>
        )}
        {task.tags && task.tags.length > 0 && (
          <View style={styles.extraOptionsContainer}>
            {task.tags.map((tag) => (
              <Text key={tag}>{tag}</Text>
            ))}
          </View>
        )}
      </View>
      <BouncyCheckbox
        size={25}
        fillColor="#FD7246"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#FD7246" }}
        onPress={toggleTaskStatus}
        isChecked={isTaskDone}
        style={styles.checkbox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    borderColor: "#D4D7D9",
    borderRadius: 8,
    borderWidth: 1,
  },

  extraOptionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 10,
    marginTop: 10,
  },

  checkbox: {},
});

export default TaskItem;
