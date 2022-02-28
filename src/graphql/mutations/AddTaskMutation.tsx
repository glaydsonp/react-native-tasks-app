import { gql } from "@apollo/client";

const ADD_TASK_MUTATION = gql`
  mutation CreateToDo($toDoInput: ToDoInput) {
    createToDo(toDoInput: $toDoInput) {
      id
      title
      description
      isTaskDone
      tags
      date
    }
  }
`;

export { ADD_TASK_MUTATION };
