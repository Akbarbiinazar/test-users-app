import React from "react";
import { Modal } from "@/shared/ui/Modal";
import { EditUserForm } from "@/features/user/editUser"; // Refactored form with react-hook-form
import { User } from "@/entities/user/model/types/users";

type EditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  user: User | null;
  onSave: (updatedUser: Partial<User>) => void;
}

export const EditUserModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  isLoading,
  user,
  onSave,
}) => {
  if (!user) return null; 
// Use children pattern in order to avoid uneccessary props drilling
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Edit ${user.name}`}>
      <EditUserForm isLoading={isLoading} user={user} onSave={onSave} onClose={onClose} />
    </Modal>
  );
};
