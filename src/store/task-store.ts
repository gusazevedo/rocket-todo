import { create } from 'zustand'
import type { ITask, ITaskList } from '../interfaces/task-interface'

type State = {
  taskList: ITaskList
  isModalOpen: boolean;
  selectedTask: ITask | undefined;
}

type Actions = {
  updateTaskList: (task: ITaskList) => void;
  createTask: (task: ITask) => void
  deleteTask: () => void
  toggleTask: (task: ITask) => void
  openModal: (task: ITask) => void
  closeModal: () => void
}

function handleCreateTask(task: ITask, state: State) {
  const list = { taskList: [...state.taskList, task] };
  localStorage.setItem('@rocketTasks', JSON.stringify(list));
  return list;
}

function handleDeleteTask(state: State) {
  const selectedTask = state.selectedTask;
  const list = state.taskList.filter((t) => t.id !== selectedTask?.id);
  localStorage.setItem('@rocketTasks', JSON.stringify({ taskList: list }));
  return { taskList: list, selectedTask: undefined, isModalOpen: false };
}

function handleToggleTask(task: ITask, state: State) {
  const list = state.taskList.map((t) => {
    if (task.id === t.id) {
      return { ...task, isCompleted: !task.isCompleted }
    }

    return t;
  });
  localStorage.setItem('@rocketTasks', JSON.stringify(list));
  return { taskList: list };
}

function handleUpdateTaskList(list: ITaskList) {
  return { taskList: list };
}

export const useTaskStore = create<State & Actions>((set) => ({
  taskList: [],
  isModalOpen: false,
  selectedTask: undefined,
  createTask: (task: ITask) => set((state) => handleCreateTask(task, state)),
  deleteTask: () => set((state) => handleDeleteTask(state)),
  toggleTask: (task: ITask) => set((state) => handleToggleTask(task, state)),
  updateTaskList: (taskList: ITaskList) => set(() => handleUpdateTaskList(taskList)),
  openModal: (task: ITask) => set(() => ({ isModalOpen: true, selectedTask: task })),
  closeModal: () => set(() => ({ isModalOpen: false, selectedTask: undefined }))
}));