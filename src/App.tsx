import TodoHeader from './components/todo-header/todo-header';
import TaskList from './components/task-list/task-list';

import './App.css'

export default function App() {
  return (
    <main>
      <div className='main-todo-cotainer'>
        <TodoHeader />
        <TaskList list={[]} />
      </div>
    </main>
  );
}
