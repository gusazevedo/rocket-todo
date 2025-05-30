import { PlusIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import './styles.css';
import { useTaskStore } from "../../store/task-store";

const formSchema = zod.object({
  taskTitle: zod.string().trim().max(144, 'The limit is 144').min(1, 'This field is required'),
}).required();

export default function NewTaskForm() {

  const { createTask } = useTaskStore();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleSubmitForm = (data: { taskTitle: string }) => {
    const newTask = {
      id: Date.now().toString(),
      taskTitle: data.taskTitle,
      isCompleted: false,
    };

    createTask(newTask);
    reset();
  }

  return (
    <div className='todo-header'>
      <h1>Your To Do</h1>
      <form
        className='todo-input-container'
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="input-wrapper">
          <input
            type='text'
            placeholder="Add new task"
            autoCapitalize='off'
            autoComplete='off'
            {...register("taskTitle")}
          />
          {errors.taskTitle && <small>{errors.taskTitle.message}</small>}
        </div>
        <button type="submit">
          <div className="icon-container">
            <PlusIcon size={24} color="#f4f4f4" />
          </div>
        </button>
      </form>
    </div>
  );
}