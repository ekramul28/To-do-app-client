/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useGetAllTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "@/redux/features/todo/todoApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Todo = () => {
  const { data: todos, isLoading } = useGetAllTodosQuery(undefined);
  const [createTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium", // Default
  });

  const handleAddTodo = async () => {
    if (newTodo.title.trim()) {
      const todoData = {
        title: newTodo.title,
        description: newTodo.description,
        dueDate: newTodo.dueDate,
        priority: newTodo.priority,
        status: "Pending", // Default status
      };

      // Create new task
      await createTodo(todoData);

      // Clear the form
      setNewTodo({
        title: "",
        description: "",
        dueDate: "",
        priority: "Medium",
      });
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-lg overflow-hidden">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          To-Do List
        </h2>

        {/* Add Todo Form */}
        <div className="flex items-center space-x-2 mb-6">
          <Input
            value={newTodo.title}
            onChange={(e: any) =>
              setNewTodo({ ...newTodo, title: e.target.value })
            }
            className="w-full p-4 rounded-lg"
            placeholder="Enter task title..."
          />
          <Button onClick={handleAddTodo} color="primary" size="lg">
            Add Task
          </Button>
        </div>

        {/* Task Form - Description, Due Date, Priority */}
        <div className="space-y-4 mb-6">
          <Input
            value={newTodo.description}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
            placeholder="Task Description"
            className="w-full p-4 rounded-lg"
          />

          {/* Custom Date Picker using Input */}
          <Input
            type="date"
            value={newTodo.dueDate}
            onChange={(e) =>
              setNewTodo({ ...newTodo, dueDate: e.target.value })
            }
            className="w-full p-4 rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Select Due Date"
          />

          <select
            value={newTodo.priority}
            onChange={(e) =>
              setNewTodo({ ...newTodo, priority: e.target.value })
            }
            className="w-full p-4 rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
        </div>

        {/* Task List */}
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {todos?.map((todo: any) => (
              <li
                key={todo.id}
                className={`flex justify-between items-center p-4 border-2 rounded-md transition-transform transform hover:scale-105 ${
                  todo.status === "Completed"
                    ? "bg-green-100 text-gray-500"
                    : "bg-white"
                }`}
              >
                <div className="flex flex-col space-y-2">
                  <span
                    className={`cursor-pointer ${
                      todo.status === "Completed" ? "line-through" : ""
                    }`}
                  >
                    <strong>{todo.title}</strong>
                  </span>
                  <p>{todo.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>Due: {new Date(todo.dueDate).toLocaleDateString()}</p>
                    <p>Priority: {todo.priority}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() =>
                      updateTodo({
                        id: todo.id,
                        data: {
                          status:
                            todo.status === "Completed"
                              ? "Pending"
                              : "Completed",
                        },
                      })
                    }
                    variant="outline"
                    color={todo.status === "Completed" ? "warning" : "success"}
                    size="sm"
                  >
                    {todo.status === "Completed"
                      ? "Mark as Pending"
                      : "Mark as Completed"}
                  </Button>
                  <Button
                    onClick={() => deleteTodo(todo.id)}
                    variant="outline"
                    color="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todo;
