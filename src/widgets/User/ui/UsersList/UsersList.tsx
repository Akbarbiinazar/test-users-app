import React, { useMemo } from "react";
import { UserCard } from "@/entities/user";
import { searchUser } from "@/shared/lib/utils";
import { PaginateUser } from "@/features/user/paginateUser";
import { User } from "@/entities/user/model/types/users";

type UsersListProps = {
  users: User[] | undefined;
  searchTerm: string;
  sortOption: string;
  currentPage: number;
  itemsPerPage: number;
};

export const UsersList: React.FC<UsersListProps> = ({
  users,
  searchTerm,
  sortOption,
  currentPage,
  itemsPerPage,
}) => {
  const filteredUsers = useMemo(() => {
    if (!users) return [];

    const sortedUsers = [...users].sort((a, b) => {
      switch (sortOption) {
        case "nameAsc":
          return a.name.localeCompare(b.name);
        case "nameDesc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return searchUser(sortedUsers, searchTerm);
  }, [users, sortOption, searchTerm]);

  const paginatedUsers = useMemo(() => {
    return filteredUsers.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredUsers, currentPage, itemsPerPage]);

  if (!paginatedUsers.length) return <p>No users found.</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <PaginateUser />
      </div>
    </>
  );
};
