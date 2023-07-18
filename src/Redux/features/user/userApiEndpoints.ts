import { api } from "../../api/apiSlices";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: "/users/allUser",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }),
            providesTags: ["user"],
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/users/create-user",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/users/login",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `/users/update/${data.id}`,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["user"],
        }),
    })
})

export const { 
    useGetAllUsersQuery,
    useRegisterUserMutation,
    useLoginUserMutation,
    useUpdateUserMutation 
} = userApi;