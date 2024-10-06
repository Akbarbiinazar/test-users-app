import { baseApi } from "@/shared/config/api/baseApi";
import { User, UserParams, Users } from "../model/types/users";

const api = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<Users, void>({
            query: () => ({
                url: '/users',
                method: "GET"
            }),
            providesTags: ["users"]
        }),
        getUser: builder.query<User, UserParams>({
            query: ({userId}) => ({
                url: `/users/${userId}`,
                method: "GET"
            }),
            providesTags: ["users"]
        }),
        editUser: builder.mutation<User, Partial<User>>({
            query: ({id, ...patch}) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: patch
            }),
            invalidatesTags: ["users"]
        }),
        createUser: builder.mutation<User, Partial<User>>({
            query: ({id, ...patch}) => ({
                url: `/users`,
                method: "POST",
                body: patch
            }),
            invalidatesTags: ["users"]
        }),
    }),
    overrideExisting: false, 
});

export const { useGetUsersQuery, useGetUserQuery, useEditUserMutation, useCreateUserMutation } = api;
