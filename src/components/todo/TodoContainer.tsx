import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);

  const { data: todos, isError, isLoading } = useGetTodosQuery(undefined);
  console.log(todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-2 space-y-5">
        {/* <div className="bg-white text-2xl font-bold p-3 flex justify-center items-center rounded-md">
          <p>There is no Task pending</p>
        </div> */}
        <div className="bg-white p-2 w-full h-full rounded-xl space-y-3 ">
          {todos?.data.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
