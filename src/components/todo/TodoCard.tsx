import { useState } from "react";
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

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newStatus, setNewStatus] = useState(status);
  const [newPriority, setNewPriority] = useState(priority);
  const [newStartDate, setNewStartDate] = useState(startDate);
  const [newEndDate, setNewEndDate] = useState(endDate);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewStatus(event.target.value as "Pending" | "inProgress" | "Completed");
  };

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewPriority(event.target.value as "High" | "Medium" | "Low");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo({
      _id,
      data: {
        title: newTitle,
        description: newDescription,
        status: newStatus,
        priority: newPriority,
        startDate: newStartDate,
        endDate: newEndDate,
      },
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset values to original
    setNewTitle(title);
    setNewDescription(description);
    setNewStatus(status);
    setNewPriority(priority);
    setNewStartDate(startDate);
    setNewEndDate(endDate);
  };

  const handleDelete = () => {
    deleteTodo(_id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 border flex flex-col gap-4">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="text-lg font-semibold text-gray-800 border-b"
          />
        ) : (
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        )}

        {status === "Completed" ? (
          <span
            className={`text-sm ${statusColors[status]} px-3 py-1 rounded-md border`}
          >
            {status}
          </span>
        ) : (
          <select
            value={newStatus}
            onChange={handleStatusChange}
            disabled={!isEditing}
            className={`text-sm ${statusColors[newStatus]} px-3 py-1 rounded-md border bg-white`}
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

      {isEditing ? (
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="text-gray-600 border p-2 mt-2 w-full"
        />
      ) : (
        <p className="text-gray-600">{description}</p>
      )}

      <div className="flex justify-between text-sm text-gray-500">
        <div>
          Start:
          {isEditing ? (
            <input
              type="date"
              value={format(newStartDate, "yyyy-MM-dd")}
              onChange={(e) => setNewStartDate(new Date(e.target.value))}
              className="text-sm"
            />
          ) : (
            format(new Date(startDate), "MMM dd, yyyy")
          )}
        </div>
        <div>
          End:
          {isEditing ? (
            <input
              type="date"
              value={format(newEndDate, "yyyy-MM-dd")}
              onChange={(e) => setNewEndDate(new Date(e.target.value))}
              className="text-sm"
            />
          ) : (
            format(new Date(endDate), "MMM dd, yyyy")
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          Priority:
          {isEditing ? (
            <select
              value={newPriority}
              onChange={handlePriorityChange}
              className={`text-sm ${priorityColors[newPriority]} px-3 py-1 rounded-md border bg-white`}
            >
              <option value="High" className="text-red-500">
                High
              </option>
              <option value="Medium" className="text-orange-500">
                Medium
              </option>
              <option value="Low" className="text-gray-500">
                Low
              </option>
            </select>
          ) : (
            <span className={`text-sm ${priorityColors[priority]}`}>
              {priority}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button onClick={handleSave} className="bg-blue-500 text-white">
                Save
              </Button>
              <Button onClick={handleCancel} className="bg-gray-500 text-white">
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button onClick={handleEdit} className="bg-yellow-500 text-white">
                Edit
              </Button>
              <Button onClick={handleDelete} className="bg-red-500 text-white">
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
