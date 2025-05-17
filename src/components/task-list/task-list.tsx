import { XIcon } from "@phosphor-icons/react";
import type { ITaskList } from "../../interfaces/task-interface";

import './styles.css';

export default function TaskList({ list }: ITaskList) {
  return (
    <ul className="task-list-container">
      {list.map((task) => (
        <li key={task.id} className="task-list-item">
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span></span>
          </label>
          <span>{task.description}</span>
          <button>
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