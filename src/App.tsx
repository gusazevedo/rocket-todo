import { useCallback, useEffect, useState } from 'react';
import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import type { ITask, ITaskList } from './interfaces/task-interface';
import RemoveTaskModal from './components/remove-task-modal/remove-task-modal';
import './App.css';

interface IModalData {
  isOpen: boolean;
  selectedTask: ITask | null;
}

export default function App() {
  const [isOpen, setIsOpen] = useState<IModalData>({isOpen: false, selectedTask: null});
  const [taskList, setTaskList] = useState<ITaskList>(() => {
    const store = localStorage.getItem('@rocketTasks');
    return store ? JSON.parse(store) : [];
  });

  useEffect(() => {
    localStorage.setItem('@rocketTasks', JSON.stringify(taskList));
  }, [taskList]);

  const handleAddTask = useCallback((taskTitle: string) => {
    const newTask = {
      id: Date.now().toString(),
      taskTitle: taskTitle,
      isCompleted: false,
    };

    setTaskList((prev) => [newTask, ...prev]);
  }, []);

  const handleRequestRemove = useCallback((task: ITask) => {
    setIsOpen({isOpen: true, selectedTask: task});
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen({isOpen: false, selectedTask: null});
  }, []);

  const handleRemoveTask = useCallback(() => {
    const newList = taskList.filter((i) => i.id !== isOpen.selectedTask?.id);
    setIsOpen({isOpen: false, selectedTask: null});
    setTaskList(newList);
  }, [isOpen, taskList]);

  const handleCompleteTask = useCallback((task: ITask) => {
    const list = taskList.map((item) => {
      if (item.id === task.id) {
        return {...item, isCompleted: !task.isCompleted};
      }

      return item;
    })

    setTaskList(list);
  }, [taskList]);

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
          handleCloseModal={handleCloseModal}
          handleRemoveTask={handleRemoveTask}
          isOpen={isOpen}
        />
      </div>
    </main>
  );
}
