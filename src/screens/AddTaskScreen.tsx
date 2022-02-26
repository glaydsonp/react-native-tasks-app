import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { TaskModel } from "../models/TaskModel";

const AddTaskScreen = () => {
  const [addTaskForm, setTaskForm] = useState<TaskModel>({
    title: "",
    description: "",
    isTaskDone: false,
    tags: [],
    date: "",
  });

  const setTags = (tags: string) => {
    const tagsColletion = tags.split(",");

    setTaskForm((currentTaskForm) => ({
      ...currentTaskForm,
      tags: tagsColletion,
    }));
  };

  const saveTask = () => {
    console.log(addTaskForm);
  };

  return (
    <View style={styles.container}>
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
      <Pressable
        onPress={saveTask}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Text>Save Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddTaskScreen;
