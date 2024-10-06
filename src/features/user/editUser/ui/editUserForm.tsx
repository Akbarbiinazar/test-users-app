import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User } from "@/entities/user/model/types/users";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/TextField";

type EditUserFormProps = {
  user: User;
  onSave: (updatedUser: Partial<User>) => void;
  isLoading: boolean;
  onClose: () => void;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  website: yup.string().required("Website is required"),
});

type FormValues = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export const EditUserForm: React.FC<EditUserFormProps> = ({
  user,
  onSave,
  isLoading,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        id="name"
        {...register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />

      <TextField
        label="Username"
        id="username"
        {...register("username", { required: "username is required" })}
        error={errors.username?.message}
      />

      <TextField
        label="Email"
        id="email"
        {...register("email", { required: "email is required" })}
        error={errors.email?.message}
      />

      <TextField
        label="Phone"
        id="phone"
        {...register("phone", { required: "phone is required" })}
        error={errors.phone?.message}
      />

      <TextField
        label="Website"
        id="website"
        {...register("website", { required: "website is required" })}
        error={errors.website?.message}
      />

      <div className="flex justify-end">
        <Button
          type="button"
          onClick={onClose}
          className="mr-2 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-300"
        >
          Cancel
        </Button>
        <Button type="submit" className="rounded-md" isLoading={isLoading}>
          Save
        </Button>
      </div>
    </form>
  );
};
