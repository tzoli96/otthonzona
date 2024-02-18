import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Link, Outlet } from "react-router-dom";
import PermissionAuth from '../PermissionAuth';
import "../../scss/shadcn.css";
export function AdminLayout() {

  return (
      <PermissionAuth role="admin">
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
                      <PermissionAuth role="admin.useractivity">
                        <CommandItem>
                          <Link to="/admin/user-activity">User Activity</Link>
                        </CommandItem>
                        </PermissionAuth>
                      <PermissionAuth role="admin.useractivity">
                        <CommandItem>
                          <Link to="/admin/permissions">Permissions</Link>
                        </CommandItem>
                      </PermissionAuth>
                      <PermissionAuth role="admin.creditmanagement">
                        <CommandItem>
                          <Link to="/admin/credit-management">CreditManagement</Link>
                        </CommandItem>
                      </PermissionAuth>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </nav>
            </div>
            <div className="col-span-3 content p-8">
              <Outlet/>
            </div>
          </div>
        </div>
      </PermissionAuth>
  );
}
