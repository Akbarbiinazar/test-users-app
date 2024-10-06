import React, { useState } from "react";
import { User } from "../model/types/users";
import { InfoItem } from "@/shared/ui/InfoItem";

import { EditUserModal } from "@/widgets/User/ui/EditUserModal/EditUserModal";
import { useEditUserFeature } from "@/features/user/editUser/model/useEditUserFeature";

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    userToEdit,
    saveChanges,
    isLoading,
  } = useEditUserFeature();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 relative">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <div className="text-gray-600">
        <InfoItem label="Username" value={user.username} />
        <InfoItem label="Email" value={user.email} />
        <InfoItem label="Phone" value={user.phone} />
        <InfoItem label="Website" value={user.website} />
      </div>

      <button
        onClick={() => openModal(user)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        {/* <BiPencil className="w-5 h-5" aria-hidden="true" /> */}
        Edit
      </button>

      <EditUserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        user={userToEdit}
        onSave={saveChanges}
        isLoading={isLoading}
      />
    </div>
  );
};
