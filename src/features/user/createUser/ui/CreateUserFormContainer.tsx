import React, { useState } from "react";
import { CreateUserForm } from "./CreateUser";
import { useCreateUserMutation } from "@/entities/user/api/usersApi";
import { User } from "@/entities/user/model/types/users";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export const CreateUserFormContainer: React.FC = () => {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleCreateUser: SubmitHandler<Omit<User, "id">> = async (data) => {
    try {
      await createUser(data).unwrap();
      toast.success("User created successfully!"); 
    } catch (error: any) {
      const errorMessage = error?.data?.message || "An error occurred while creating the user.";
      toast.error(errorMessage); 
    }
  };

  return (
    <CreateUserForm
      onSubmit={handleCreateUser}
      isLoading={isLoading}
    />
  );
};
