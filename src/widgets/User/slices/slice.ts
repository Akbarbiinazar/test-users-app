import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/entities/user/model/types/users";
import { itemsPerPage } from "@/shared/constants/constants";

type UsersState = {
    users: User[];
  currentPage: number;
  itemsPerPage: number;
  sortOption: "nameAsc" | "nameDesc";
}

const initialState: UsersState = {
  users: [],
  currentPage: 1,
  itemsPerPage: itemsPerPage,
  sortOption: "nameAsc",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setUsers: (state, action) => {
        state.users = action.payload;
      },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setSortOption: (state, action: PayloadAction<"nameAsc" | "nameDesc">) => {
      state.sortOption = action.payload;
    },
  },
});

export const { setPage, setUsers, setItemsPerPage, setSortOption } = usersSlice.actions;
export default usersSlice.reducer;
