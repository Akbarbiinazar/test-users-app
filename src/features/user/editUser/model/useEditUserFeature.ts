import { useState } from "react";
import { User } from "@/entities/user/model/types/users"; // Adjust the import path
import { useEditUserMutation } from "@/entities/user/api/usersApi";
import { toast } from "react-toastify";

type UseEditUserFeature = {
  isModalOpen: boolean;
  openModal: (user: User) => void;
  closeModal: () => void;
  userToEdit: User | null;
  saveChanges: (updatedUser: Partial<User>) => void;
  isLoading: boolean;
}

export const useEditUserFeature = (): UseEditUserFeature => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  
  const [editUser, { isLoading }] = useEditUserMutation();

  const openModal = (user: User) => {
    setUserToEdit(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setUserToEdit(null);
  };

  const saveChanges = async (updatedUser: Partial<User>) => {
    try {
      if (!userToEdit) return;
    
      const newUser = { ...userToEdit, ...updatedUser };

      await editUser(newUser).unwrap();
      toast.success("User updated successfully!"); // Show success message
      closeModal();
    } catch (error) {
      const errorMessage =  (error as any)?.data?.message  || "An error occurred while updating the user.";
      toast.error(errorMessage); // Show error message
      console.error("Error updating user: ", error);
    }
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    userToEdit,
    saveChanges,
    isLoading,
  };
};
