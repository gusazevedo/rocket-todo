export interface ITask {
  description: string;
  id: string;
  isCompleted: boolean;
}

export interface ITaskList {
  list: ITask[] | [];
}