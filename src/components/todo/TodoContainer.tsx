/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllTodosQuery } from "@/redux/features/todo/todoApi";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const TodoContainer = () => {
  const user = useSelector(selectCurrentUser);
  console.log("okok", user);
  // Ensure user exists before making the query
  const { data, isLoading } = useGetAllTodosQuery(user?.email);
  console.log("Fetched Todos:", data?.data);

  // Use the fetched data if available, otherwise default to an empty array
  const todos = data?.data || [];

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-black text-white w-full h-full rounded-xl p-2 space-y-5">
        <div className="bg-white p-2 w-full h-full rounded-xl space-y-3">
          {isLoading ? (
            <p>Loading....</p>
          ) : todos?.length === 0 ? (
            <div className="bg-white text-2xl font-bold p-3 flex justify-center items-center rounded-md">
              <p>There is no task pending</p>
            </div>
          ) : (
            todos?.map((item: any) => <TodoCard key={item.id} {...item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
