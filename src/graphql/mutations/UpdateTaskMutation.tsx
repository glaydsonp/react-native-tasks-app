import { gql } from "@apollo/client";

const UPDATE_TASK_MUTATION = gql`
  mutation UpdateToDo($toDoId: ID!, $toDoInput: ToDoInput) {
    updateToDo(toDoId: $toDoId, toDoInput: $toDoInput) {
      id
      title
      description
      isTaskDone
      tags
      date
    }
  }
`;

export { UPDATE_TASK_MUTATION };
