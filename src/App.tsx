import { useCallback, useEffect, useState } from 'react';
import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import type { ITask } from './interfaces/task-interface';
import './App.css'

export default function App() {
  const [taskList, setTaskList] = useState<ITask[]>(() => {
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

  return (
    <main>
      <div className='main-todo-cotainer'>
        <NewTaskForm handleAddTask={handleAddTask} />
        <TaskList list={taskList} />
      </div>
    </main>
  );
}
