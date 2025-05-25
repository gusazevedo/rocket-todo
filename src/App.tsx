import { useCallback, useEffect, useState } from 'react';
import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import type { ITask, ITaskList } from './interfaces/task-interface';
import './App.css'
import CustomModal from './components/custom-modal/custom-modal';

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
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

  const handleRemoveTask = useCallback((task: ITask) => {
    const list = taskList.filter((e) => e.id !== task.id);
    setTaskList(list);
  }, [taskList]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <main>
      <div className='main-todo-cotainer'>
        <NewTaskForm handleAddTask={handleAddTask} />
        <TaskList list={taskList} handleRemoveTask={handleRemoveTask} />
        <CustomModal isOpen={isOpen} closeModal={handleCloseModal} modalTitle='Are you sure?'>
          <div>
            <p>oi</p>
          </div>
        </CustomModal>
      </div>
    </main>
  );
}
