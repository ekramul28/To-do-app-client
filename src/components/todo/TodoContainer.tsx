/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllTodosQuery } from "@/redux/features/todo/todoApi";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { data: todos, isLoading } = useGetAllTodosQuery(undefined);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-2 space-y-5">
        <div className="bg-white p-2 w-full h-full rounded-xl space-y-3 ">
          {isLoading ? (
            "Loading...."
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
