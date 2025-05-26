import type { ITask } from "../../interfaces/task-interface";
import CustomModal from "../custom-modal/custom-modal";

import './remove-task-modal.css';

interface IRemoveTaskModal {
  isOpen: { isOpen: boolean, selectedTask: ITask | null };
  handleCloseModal: () => void;
  handleRemoveTask: () => void;
}

export default function RemoveTaskModal({
  isOpen,
  handleCloseModal,
  handleRemoveTask
}: IRemoveTaskModal) {
  return (
    <CustomModal
      isOpen={isOpen.isOpen}
      closeModal={handleCloseModal}
      modalTitle='Delete task'
      className='remove-task-modal'
    >
      <div className='inner-class'>
        <p>You're about to  delete this task. Are you sure about that?</p>
        <div className='button-row'>
          <button onClick={handleRemoveTask}>Yes, delete it</button>
          <button onClick={handleCloseModal}>Not delete</button>
        </div>
      </div>
    </CustomModal>
  );
}