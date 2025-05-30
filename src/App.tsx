import { useEffect } from 'react';
import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import RemoveTaskModal from './components/remove-task-modal/remove-task-modal';
import { useTaskStore } from './store/task-store';
import './App.css';

export default function App() {
  const { updateTaskList } = useTaskStore();

  useEffect(() => {
    const store = localStorage.getItem('@rocketTasks') || '[]';
    updateTaskList(JSON.parse(store))
  }, []);

  return (
    <main>
      <div className='main-todo-container'>
        <NewTaskForm />
        <TaskList />
        <RemoveTaskModal />
      </div>
    </main>
  );
}
