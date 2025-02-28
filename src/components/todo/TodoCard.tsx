import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "@/redux/features/todo/todoApi";
import { Button } from "../ui/button";
import { format } from "date-fns";

type TTodoCardProps = {
  _id: string;
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
  _id,
  title,
  description,
  startDate,
  endDate,
  status,
  priority,
}: TTodoCardProps) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  console.log(_id);
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateTodo({ _id, data: { status: event.target.value } });
  };

  const handleDelete = () => {
    deleteTodo(_id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 border flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

        {/* Show dropdown only if status is NOT "Completed" */}
        {status === "Completed" ? (
          <span
            className={`text-sm ${statusColors[status]} px-3 py-1 rounded-md border`}
          >
            {status}
          </span>
        ) : (
          <select
            value={status}
            onChange={handleStatusChange}
            className={`text-sm ${statusColors[status]} px-3 py-1 rounded-md border bg-white`}
          >
            <option value="Pending" className="text-yellow-500">
              Pending
            </option>
            <option value="inProgress" className="text-blue-500">
              In Progress
            </option>
            <option value="Completed" className="text-green-500">
              Completed
            </option>
          </select>
        )}
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
        <Button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
