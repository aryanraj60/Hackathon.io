import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DeleteModal = ({ isModalOpen, setIsModalOpen, id, deleteSubmission }) => {
  return (
    <Modal style={customStyles} isOpen={isModalOpen}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Delete Submission</h1>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </div>
      <p className="text-base text-gray-400 max-w-sm py-3">
        This action is irreversible. Are you sure you want to delete this
        submission?
      </p>
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-3 py-1 text-gray-800 border border-black rounded-xl"
        >
          Cancel
        </button>
        <button
          className="px-3 py-1 text-white border border-black rounded-xl bg-red-500"
          onClick={() => deleteSubmission(id)}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
