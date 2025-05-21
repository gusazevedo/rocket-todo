import { PlusIcon } from "@phosphor-icons/react";
import type { ChangeEvent } from "react";
import './styles.css';

interface ITodoHeader {
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
  inputValue: string;
}

export default function TodoHeader({handleChangeInput, inputValue, handleAddTask}: ITodoHeader) {
  return (
    <div className='todo-header'>
      <h1>Your To Do</h1>
      <div className='todo-input-container'>
        <input
          type='text'
          placeholder="Add new task"
          name='todo-name'
          autoCapitalize='off'
          autoComplete='off'
          value={inputValue}
          onChange={(e) => handleChangeInput(e)} />
        <button type="button" onClick={handleAddTask}>
          <div className="icon-container">
            <PlusIcon size={24} color="#f4f4f4" />
          </div>
        </button>
      </div>
    </div>
  );
}