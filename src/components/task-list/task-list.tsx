import { XIcon } from "@phosphor-icons/react";

import './styles.css';
import type { ITask } from "../../interfaces/task-interface";
import { useTaskStore } from "../../store/task-store";
import { useCallback } from "react";

export default function TaskList() {

  const {taskList, openModal, toggleTask} = useTaskStore();

  const handleRequestToRemove = useCallback((task: ITask) => {
    openModal(task)
  }, []);

  const handleCompleteTask = useCallback((task: ITask) => {
    toggleTask(task);
  }, []);

  return (
    <ul className="task-list-container">
      {taskList.map((task) => (
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
          <button onClick={() => handleRequestToRemove(task)}>
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