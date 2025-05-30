import { XIcon } from "@phosphor-icons/react";

import './styles.css';
import type { ITask, ITaskList } from "../../interfaces/task-interface";

interface ITaskListComponent {
  list: ITaskList;
  handleRemoveTask: (task: ITask) => void;
  handleCompleteTask: (task: ITask) => void;
}

export default function TaskList({list, handleRemoveTask, handleCompleteTask}: ITaskListComponent) {
  return (
    <ul className="task-list-container">
      {list.map((task) => (
        <li key={task.id} className="task-list-item">
          <label className="custom-checkbox">
            <input
              type="checkbox"
              name="input-check"
              checked={task.isCompleted}
              onChange={() => handleCompleteTask(task)}
            />
            <span></span>
          </label>
          <span className={task.isCompleted ? 'task-complete' : ''}>{task.taskTitle}</span>
          <button onClick={() => handleRemoveTask(task)}>
            <div>
              <XIcon
                size={20}
                weight="bold"
                color="#505050" />
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}