import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FormEvent, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useCreateTodoMutation } from "@/redux/features/todo/todoApi";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const AddTodoModal = () => {
  const user = useSelector(selectCurrentUser);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [addTodo, { isError, isSuccess, isLoading }] = useCreateTodoMutation();
  console.log(user);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskDetails = {
      userEmail: user?.email,
      isCompleted: false,
      title: task,
      description,
      priority,
      startDate,
      endDate,
    };

    addTodo(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-black text-white text-xl font-semibold">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onChange={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
                value={task}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                value={description}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Select Priority</Label>
              <Select
                onValueChange={(value) => setPriority(value)}
                value={priority}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select Your Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Start Date */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="startDate" className="text-right">
                Start Date
              </Label>
              <Input
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                id="startDate"
                className="col-span-3"
                value={startDate}
              />
            </div>

            {/* End Date */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="endDate" className="text-right">
                End Date
              </Label>
              <Input
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
                id="endDate"
                className="col-span-3"
                value={endDate}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            {isLoading ? (
              <Button disabled>Saving...</Button>
            ) : (
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            )}
            {isError && (
              <p className="text-red-500 text-sm">
                Something went wrong, please try again.
              </p>
            )}
            {isSuccess && (
              <p className="text-green-500 text-sm">Task added successfully!</p>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
