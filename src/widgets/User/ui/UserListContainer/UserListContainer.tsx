import React, { useState, useMemo } from "react";
import { useGetUsersQuery } from "@/entities/user/api/usersApi";
import { useDispatch, useSelector } from "react-redux";
import { setSortOption } from "../../slices/slice";
import { Button } from "@/shared/ui/Button";
import { debounce } from "@/shared/lib/utils";
import { CreateUserModal } from "../CreateUserModal";
import { UsersList } from "../UsersList/UsersList";
import { SortUserOptions } from "@/features/user/sortUser";

export const UsersListContainer: React.FC = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { sortOption, currentPage, itemsPerPage } = useSelector(
    (state: any) => state.users
  );

  const handleDisclosureModal = (isOpened: boolean) => setIsModalOpen(isOpened);

  const debouncedSearch = useMemo(
    () => debounce((value: string) => setSearchTerm(value), 300),
    []
  );

  const handleSortChange = (option: "nameAsc" | "nameDesc") =>
    dispatch(setSortOption(option));

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div>
      <div className="flex justify-end gap-5 my-5">
        <Button onClick={() => handleDisclosureModal(true)}>
          Create New User
        </Button>
        <SortUserOptions onSortChange={handleSortChange} />
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => debouncedSearch(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>
      <UsersList
        users={users}
        searchTerm={searchTerm}
        sortOption={sortOption}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <CreateUserModal
        isModalOpen={isModalOpen}
        handleCloseModal={() => handleDisclosureModal(false)}
      />
    </div>
  );
};
