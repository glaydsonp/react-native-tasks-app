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

interface TaskItemProps {
  task: TaskModel;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const [isTaskDone, setIsTaskDone] = useState(task.isTaskDone);
  console.log(task.date);
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
        {task.date && (
          <View style={styles.extraOptionsContainer}>
            <View style={styles.extraOptionsContainer}>
              {task.date && (
                <>
                  <DateIcon />
                  <Text style={{ marginLeft: 5 }}>
                    {formatDate(task.date, "dd MMM")}
                  </Text>
                </>
              )}
            </View>
            <View style={styles.extraOptionsContainer}>
              {task.date && (
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
        onPress={() => setIsTaskDone((isTaskDone) => !isTaskDone)}
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
