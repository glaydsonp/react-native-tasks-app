import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { TaskModel } from "../models/TaskModel";
import { TextInputMask } from "react-native-masked-text";
import moment from "moment";
import Toast from "react-native-toast-message";
import formatDate from "../utils/formatDate";
import { useMutation } from "@apollo/client";
import { ADD_TASK_MUTATION } from "../graphql/mutations/AddTaskMutation";
import { RootStackScreenProps } from "../../types";
import { makeUniqueId } from "@apollo/client/utilities";
import { TASKS_QUERY } from "../graphql/queries/TaskQueries";

const AddTaskScreen = ({
  navigation,
}: RootStackScreenProps<"AddTaskScreen">) => {
  const [addTask, { data, loading, error }] = useMutation(ADD_TASK_MUTATION, {
    update: (cache, mutationResult) => {
      const newTask = mutationResult.data.createToDo;

      const cachedQueryData = cache.readQuery<{ getToDos: TaskModel[] }>({
        query: TASKS_QUERY,
      });

      cache.writeQuery({
        query: TASKS_QUERY,
        data: { getToDos: [...cachedQueryData.getToDos, newTask] },
      });
    },
    optimisticResponse: () => {
      return {
        __typename: "Mutation",
        createToDo: {
          __typename: "ToDo",
          _id: `${makeUniqueId("ToDo")}`,
          id: `${makeUniqueId("ToDo")}`,
          title: addTaskForm.title,
          description: addTaskForm.description,
          isTaskDone: addTaskForm.isTaskDone,
          tags: addTaskForm.tags,
          date: addTaskForm.date,
        },
      };
    },
  });

  const [addTaskForm, setTaskForm] = useState<TaskModel>({
    title: "",
    description: "",
    isTaskDone: false,
    tags: [],
    date: "",
    time: "",
  });

  const setTags = (tags: string) => {
    const tagsColletion = tags.split(",");

    setTaskForm((currentTaskForm) => ({
      ...currentTaskForm,
      tags: tagsColletion,
    }));
  };

  const saveTask = () => {
    if (addTaskForm.date) {
      if (!moment(addTaskForm.date, "MM/DD/YYYY", true).isValid()) {
        Toast.show({
          type: "error",
          text1: "The Date informed is invalid.",
        });
        return;
      }
    }

    if (addTaskForm.time) {
      if (!moment(addTaskForm.time, "HH:mm", true).isValid()) {
        Toast.show({
          type: "error",
          text1: "The time informed is invalid.",
        });
        return;
      }
    }

    if (addTaskForm.date && !addTaskForm.time) {
      Toast.show({
        type: "error",
        text1: "You must fill the time field.",
      });
      return;
    }

    if (!addTaskForm.date && addTaskForm.time) {
      Toast.show({
        type: "error",
        text1: "You must fill the date field.",
      });
      return;
    }

    if (!addTaskForm.description) {
      Toast.show({
        type: "error",
        text1: "The title description is required.",
      });
      return;
    }

    if (!addTaskForm.title) {
      Toast.show({
        type: "error",
        text1: "The title field is required.",
      });
      return;
    }

    let date; 

    if (!!addTaskForm.date && !!addTaskForm.time) {
      date = new Date(`${addTaskForm.date} ${addTaskForm.time}`).toISOString();
    }

    addTask({
      variables: {
        toDoInput: {
          title: addTaskForm.title,
          description: addTaskForm.description,
          isTaskDone: false,
          tags: addTaskForm.tags,
          date: date || null,
        },
      },
    });

    if (!loading && !error) {
      navigation.pop();
    } else {
      Toast.show({
        type: "error",
        text1: "An error has ocurred while trying to save the Task.",
        text2: error.message,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Task Name"
          style={styles.input}
          onChangeText={(taskTitle) =>
            setTaskForm((currentTaskForm) => ({
              ...currentTaskForm,
              title: taskTitle,
            }))
          }
          value={addTaskForm.title}
        />
        <TextInput
          placeholder="Task Description"
          style={styles.input}
          onChangeText={(taskDescription) =>
            setTaskForm((currentTaskForm) => ({
              ...currentTaskForm,
              description: taskDescription,
            }))
          }
          value={addTaskForm.description}
        />
        <TextInput
          placeholder="Tags (separated by comma ',')"
          style={styles.input}
          onChangeText={setTags}
          value={addTaskForm.tags.join(",")}
        />
        <TextInputMask
          style={styles.input}
          type={"custom"}
          options={{ mask: "99/99/9999" }}
          placeholder="Date: MM/DD/YYYY"
          value={addTaskForm.date}
          onChangeText={(date) => {
            setTaskForm((currentTaskForm) => ({
              ...currentTaskForm,
              date,
            }));
          }}
        />
        <TextInputMask
          style={styles.input}
          type={"custom"}
          options={{ mask: "99:99" }}
          placeholder="Hour: 99:99"
          value={addTaskForm.time}
          onChangeText={(time) => {
            setTaskForm((currentTaskForm) => ({
              ...currentTaskForm,
              time,
            }));
          }}
        />
      </View>
      <Pressable
        onPress={saveTask}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
          width: Dimensions.get("window").width - 20,
          margin: "auto",
          padding: 10,
          backgroundColor: "rgb(67, 85, 182)",
          borderRadius: 8,
        })}
      >
        <Text
          style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
        >
          Save Task
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },

  input: {
    borderWidth: 1,
    borderColor: "rgb(212, 215, 217)",
    width: Dimensions.get("window").width - 20,
    margin: "auto",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
});

export default AddTaskScreen;
