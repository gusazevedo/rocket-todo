import { useTaskStore } from "../../store/task-store";
import CustomModal from "../custom-modal/custom-modal";

import './remove-task-modal.css';

export default function RemoveTaskModal() {

  const {
    deleteTask,
    isModalOpen,
    closeModal
  } = useTaskStore();

  return (
    <CustomModal
      isOpen={isModalOpen}
      closeModal={closeModal}
      modalTitle='Delete task'
      className='remove-task-modal'
    >
      <div className='inner-class'>
        <p>You're about to  delete this task. Are you sure about that?</p>
        <div className='button-row'>
          <button onClick={deleteTask}>Yes, delete it</button>
          <button onClick={closeModal}>Not delete</button>
        </div>
      </div>
    </CustomModal>
  );
}