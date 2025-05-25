export interface ITask {
  id: string;
  taskTitle: string;
  isCompleted: boolean;
}

export type ITaskList = ITask[];

export interface INewTaskForm {
  handleAddTask: (taskTitle: string) => void;
}