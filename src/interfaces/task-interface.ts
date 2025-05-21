export interface ITask {
  id: string;
  taskTitle: string;
  isCompleted: boolean;
}

export interface ITaskList {
  list: ITask[] | []
}

export interface INewTaskForm {
  handleAddTask: (taskTitle: string) => void;
}