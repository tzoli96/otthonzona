"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../../../ui/button"
import { Switch } from "../../../ui/switch"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../ui/form"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../../../ui/dropdown-menu";
import React, {useState} from "react";
import {
    getPermissionsByUserRoleId,
    updatePermission
} from "../../../../utils/request/adminRequest";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-hot-toast";
export type UserRole = {
    id: string
    name: string
}

const FormSchema = z.object({
    permissions: z.array(z.object({
        id: z.string(),
        name: z.string(),
        isSelected: z.boolean(),
    }))
});


type PermissionType = {
    id: string;
    name: string;
    isSelected: boolean;
};

type FetchedPermissionsType = {
    data: PermissionType[];
};
export const columns: ColumnDef<UserRole>[] = [

    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    User Role Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const entity = row.original
            const [isDialogOpen, setIsDialogOpen] = React.useState(false);
            const [permissions, setPermissions] = useState<PermissionType[]>([]);

            const showEditForm = async () => {
                const userRoleId = entity.id;
                const fetchedPermissions : FetchedPermissionsType = await getPermissionsByUserRoleId(userRoleId);
                const formValues = {
                    permissions: fetchedPermissions.data.map(permission => ({
                        id: permission.id,
                        name: permission.name,
                        isSelected: permission.isSelected,
                    }))
                };
                form.reset(formValues);

                setPermissions(fetchedPermissions.data);
                setIsDialogOpen(true);
            };

            const form = useForm<z.infer<typeof FormSchema>>({
                resolver: zodResolver(FormSchema),
            })

            async function onSubmit(data: z.infer<typeof FormSchema>) {
                await updatePermission(entity,data).then((data) => {
                    setIsDialogOpen(false);
                    toast.success('Permission modify is success');
                });
            }

            return (
                <React.Fragment>
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogContent className="sm:max-w-md">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                        <div>
                                            <h3 className="mb-4 text-lg font-medium">User Role Permissions</h3>

                                            <div className="space-y-4">
                                                {permissions.map((permission,index) => (
                                                    <FormField
                                                        control={form.control}
                                                        name={`permissions.${index}.isSelected`}
                                                        render={({ field }) => (
                                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                                <div className="space-y-0.5">
                                                                    <FormLabel className="text-base">
                                                                        {permission.name}
                                                                    </FormLabel>
                                                                </div>
                                                                <FormControl>
                                                                    <Switch
                                                                        onCheckedChange={field.onChange}
                                                                        defaultChecked={permission.isSelected}
                                                                    />
                                                                </FormControl>
                                                            </FormItem>
                                                        )}
                                                    />
                                                ))}

                                            </div>
                                        </div>
                                        <Button type="submit">Submit</Button>
                                    </form>
                                </Form>
                            </DialogContent>
                        </Dialog>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={showEditForm}>
                                Assign Permissions
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </React.Fragment>
            )
        },
    },
]
