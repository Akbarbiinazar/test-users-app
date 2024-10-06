import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField } from "@/shared/ui/TextField";
import { Button } from "@/shared/ui/Button";
import { User } from "@/entities/user/model/types/users";

type CreateUserFormProps = {
  onSubmit: SubmitHandler<Omit<User, "id">>;
  isLoading: boolean;
  errorMessage?: string;
};

export const CreateUserForm: React.FC<CreateUserFormProps> = ({
  onSubmit,
  isLoading,
  errorMessage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<User, "id">>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && (
        <p className="text-red-500 mb-4">Error: {errorMessage}</p>
      )}

      <TextField
        label="Name"
        {...register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />
      <TextField
        label="Username"
        {...register("username", { required: "Username is required" })}
        error={errors.username?.message}
      />
      <TextField
        label="Email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: "Invalid email address",
          },
        })}
        error={errors.email?.message}
      />
      <TextField
        label="Phone"
        {...register("phone", { required: "Phone is required" })}
        error={errors.phone?.message}
      />
      <TextField
        label="Website"
        {...register("website", { required: "Website is required" })}
        error={errors.website?.message}
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create User"}
      </Button>
    </form>
  );
};
