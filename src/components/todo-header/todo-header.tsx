import { PlusIcon } from "@phosphor-icons/react";
import './styles.css';

export default function TodoHeader() {
  return (
    <div className='todo-header'>
      <h1>Your To Do</h1>
      <div className='todo-input-container'>
        <input
          type='text'
          placeholder="Add new task"
          name='todo-name'
          autoCapitalize='off'
          autoComplete='off' />
        <button type="button">
          <div className="icon-container">
            <PlusIcon size={24} color="#f4f4f4" />
          </div>
        </button>
      </div>
    </div>
  );
}