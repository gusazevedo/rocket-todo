import { useCallback, useState, type ChangeEvent } from 'react';
import TodoHeader from './components/todo-header/todo-header';
import TaskList from './components/task-list/task-list';
import type { ITask } from './interfaces/task-interface';

import './App.css'

export default function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSetInputText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }, []);

  const handleAddTask = useCallback(() => {
    const newTask = {
      id: Date.now().toString(),
      description: inputText,
      isCompleted: false,
    };

    setTaskList((prev) => [...prev, newTask]);
    setInputText('');
  }, [inputText]);

  return (
    <main>
      <div className='main-todo-cotainer'>
        <TodoHeader
          inputValue={inputText}
          handleChangeInput={handleSetInputText}
          handleAddTask={handleAddTask} />
        <TaskList list={taskList} />
      </div>
    </main>
  );
}
