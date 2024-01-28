import { ComponentProps, useState, useEffect } from "react";
import { ModeToggle } from "../mode-toggle";
import { useTheme } from "../theme-provider";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "../../lib/utils";
import { UserActivity } from "./UserActivity";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/command";
import { Link, Outlet } from "react-router-dom";

export function AdminLayout() {
  const [count, setCount] = useState(0);
  const { theme } = useTheme();

  return (
    <div className="">
      <div className="w-full size-full grid grid-cols-4 gap-8 content-start ">
        <div className="col-span-1 h-screen pl-8 pt-8 pb-8 h-screen sticky top-0">
          <nav className="border-solid h-full border-2 border-slate-200 shadow-lg p-6">
            <Command>
              <CommandList>
                <CommandGroup heading="">
                  <CommandItem>
                    <Link to="/admin/">Dashboard</Link>
                  </CommandItem>
                  <CommandItem>
                    <Link to="/admin/user-activity">User Activity</Link>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </nav>
        </div>
        <div className="col-span-3 content p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
