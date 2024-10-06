
import React from "react";
import { CreateUserFormContainer } from "@/features/user/createUser";
import { Modal } from "@/shared/ui/Modal";

type CreateUserModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

export const CreateUserModal: React.FC<CreateUserModalProps> = ({
  isModalOpen,
  handleCloseModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      title="Create New User"
    >
      <CreateUserFormContainer />
    </Modal>
  );
};
