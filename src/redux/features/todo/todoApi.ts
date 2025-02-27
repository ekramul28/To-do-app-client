import { baseApi } from "../../api/baseApi";

const todoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Todos
    getAllTodos: builder.query({
      query: (email) => ({
        url: `/todos/${email}`,
        method: "GET",
      }),
      providesTags: ["Todos"],
    }),

    // Create a New Todo
    createTodo: builder.mutation({
      query: (data) => ({
        url: "/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),

    // Update a Todo (Complete/Pending)
    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Todos"],
    }),

    // Delete a Todo
    deleteTodo: builder.mutation({
      query: (id: string) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
