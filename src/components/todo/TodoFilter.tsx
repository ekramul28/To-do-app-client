import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const TodoFilter = () => {
  const [position, setPosition] = useState("bottom");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-black text-white "> Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Height</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
