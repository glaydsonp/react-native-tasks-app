export interface TaskModel {
  id?: string;
  title: string;
  description: string;
  isTaskDone: boolean;
  tags?: string[];
  date?: string;
}
