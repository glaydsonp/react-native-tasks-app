import { gql } from "@apollo/client";

const TASKS_QUERY = gql`
  query GetTodos {
    getToDos {
      id
      title
      description
      isTaskDone
      tags
      date
    }
  }
`;

export { TASKS_QUERY };
