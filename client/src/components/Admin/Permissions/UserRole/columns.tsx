"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../../../ui/button"

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
import { Input } from "../../../ui/input"
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
import React from "react";
import {getUserRoleById, updateCurrentRoleList , updateUserRoleNameById , deleteUserRole} from "../../../../utils/request/adminRequest";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export type UserRole = {
    id: string
    name: string
}
const FormSchema = z.object({
    user_role: z
        .string({
            required_error: "Please select a user role to display.",
        })
})

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
            const [entityData, setentityData] = React.useState(false);
            const showEditForm = async () => {
                setIsDialogOpen(true);
                const data = await getUserRoleById(entity.id);
                setentityData(data);
            };

            const deleteEntity = async () => {
                await deleteUserRole(entity.id).then((data) => {
                    setIsDialogOpen(false);
                    toast.success('Delete entity');
                    navigation("/admin") //todo :refresh data table
                });
            };

            const form = useForm<z.infer<typeof FormSchema>>({
                resolver: zodResolver(FormSchema),
                values: {
                    user_role: entity.name,
                },
            })
            const navigation = useNavigate();

            async function onSubmit(data: z.infer<typeof FormSchema>) {
                const userRoleName = data.user_role;
                if (userRoleName !== entity.name) {
                    await updateUserRoleNameById(entity.id, userRoleName)
                        .then((data) => {
                            setIsDialogOpen(false);
                            toast.success('Success modify');
                            navigation("/admin")
                    });
                }

            }

            return (
                <React.Fragment>
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogContent className="sm:max-w-md">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                                        <FormField
                                            control={form.control}
                                            name="user_role"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>User Role Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="user role" {...field} />
                                                    </FormControl>
                                                    <FormDescription>
                                                        This is your user role name.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
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
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={deleteEntity}>
                                Delete
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </React.Fragment>
            )
        },
    },
]
