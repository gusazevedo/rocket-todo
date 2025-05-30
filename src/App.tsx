import { useCallback, useEffect } from 'react';
import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import type { ITask } from './interfaces/task-interface';
import RemoveTaskModal from './components/remove-task-modal/remove-task-modal';
import './App.css';
import { useTaskStore } from './store/task-store';

export default function App() {
  const {
    taskList,
    createTask,
    deleteTask,
    toggleTask,
    updateTaskList,
    isModalOpen,
    openModal,
    closeModal
  } = useTaskStore();

  useEffect(() => {
    const store = localStorage.getItem('@rocketTasks') || '[]';
    updateTaskList(JSON.parse(store))
  }, []);

  const handleAddTask = useCallback((taskTitle: string) => {
    const newTask = {
      id: Date.now().toString(),
      taskTitle: taskTitle,
      isCompleted: false,
    };

    createTask(newTask);
  }, []);

  const handleRequestRemove = useCallback((task: ITask) => {
    openModal(task)
  }, []);

  const handleCompleteTask = useCallback((task: ITask) => {
    toggleTask(task);
  }, []);

  return (
    <main>
      <div className='main-todo-container'>
        <NewTaskForm handleAddTask={handleAddTask} />
        <TaskList
          list={taskList}
          handleRemoveTask={handleRequestRemove}
          handleCompleteTask={handleCompleteTask}
        />
        <RemoveTaskModal
          handleCloseModal={closeModal}
          handleRemoveTask={deleteTask}
          isOpen={isModalOpen}
        />
      </div>
    </main>
  );
}
