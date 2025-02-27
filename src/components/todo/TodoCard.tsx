import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "@/redux/features/todo/todoApi";
import { Button } from "../ui/button";
import { format } from "date-fns";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: "Pending" | "Completed" | "inProgress";
  priority: "High" | "Medium" | "Low";
};

const statusColors = {
  Pending: "text-yellow-500",
  Completed: "text-green-500",
  inProgress: "text-blue-500",
};

const priorityColors = {
  High: "text-red-500 font-bold",
  Medium: "text-orange-500",
  Low: "text-gray-500",
};

const TodoCard = ({
  id,
  title,
  description,
  startDate,
  endDate,
  status,
  priority,
}: TTodoCardProps) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const toggleState = () => {
    updateTodo({
      id,
      data: { status: status === "Completed" ? "Pending" : "Completed" },
    });
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 border flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span
          className={`text-sm ${statusColors[status]} px-3 py-1 rounded-md border`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-600">{description}</p>

      <div className="flex justify-between text-sm text-gray-500">
        <p>Start: {format(new Date(startDate), "MMM dd, yyyy")}</p>
        <p>End: {format(new Date(endDate), "MMM dd, yyyy")}</p>
      </div>

      <div className="flex justify-between items-center">
        <span className={`text-sm ${priorityColors[priority]}`}>
          Priority: {priority}
        </span>
        <div className="flex gap-3">
          <Button
            onClick={toggleState}
            className="bg-green-500 text-white px-3 py-1"
          >
            {status === "Completed" ? "Reopen" : "Mark Done"}
          </Button>
          <Button
            onClick={handleDelete}
            className="bg-red-500 text-white px-3 py-1"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
