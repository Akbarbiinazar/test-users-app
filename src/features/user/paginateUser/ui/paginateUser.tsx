import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "@/widgets/User/slices/slice";
import { RootState } from "@/app/providers/store/config/config";
import { useGetUsersQuery } from "@/entities/user/api/usersApi";

export const PaginateUser: React.FC = () => {
  const { data: users = [] } = useGetUsersQuery();
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.users
  );
  

  const totalPages = users && Math.ceil(users.length / itemsPerPage);

  const selectPageHandler = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== currentPage
    )
      dispatch(setPage(selectedPage));
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <button
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => selectPageHandler(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(users && users.length / itemsPerPage)].map((_, i) => {
          const isActive = currentPage === i + 1;
          return (
            <span
              key={i}
              onClick={() => selectPageHandler(i + 1)}
              className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer
      ${
        isActive
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400"
      }
      rounded-md mx-1`}
            >
              {i + 1}
            </span>
          );
        })}

        <button
          className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={() => selectPageHandler(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </ul>
    </nav>
  );
};
