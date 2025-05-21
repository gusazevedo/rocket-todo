import { useCallback, useState } from 'react';
import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import type { ITask } from './interfaces/task-interface';

import './App.css'

export default function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleAddTask = useCallback((taskTitle: string) => {
    const newTask = {
      id: Date.now().toString(),
      taskTitle: taskTitle,
      isCompleted: false,
    };

    console.log('item', newTask);

    setTaskList((prev) => [...prev, newTask]);
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
