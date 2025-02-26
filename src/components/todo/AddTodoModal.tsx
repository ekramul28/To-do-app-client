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

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  // const dispatch = useAppDispatch();
  const [addTodo, { data, isError, isSuccess, isLoading }] =
    useCreateTodoMutation();
  console.log(data, isError, isSuccess, isLoading);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const randomString = Math.random().toString(36).substring(2, 7);

    const taskDetails = {
      id: randomString,
      isCompleted: false,
      title: task,
      description,
      priority,
    };

    console.log("inside todo", taskDetails);
    // dispatch(addTodo(taskDetails));
    addTodo(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
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
                onChange={(e) => setTask(e.target.value)} // use onChange instead of onBlur
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
                onChange={(e) => setDescription(e.target.value)} // use onChange instead of onBlur
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
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
