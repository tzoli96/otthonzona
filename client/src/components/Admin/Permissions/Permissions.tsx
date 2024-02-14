
import React, { useState, useEffect } from "react";
import PermissionAuth from '../../PermissionAuth';
import { DataTable } from "./Permissions/data-table"
import {columns, Permission} from "./Permissions/columns"
import {getPermissionList, updateUserRoleNameById , createPermission } from "../../../utils/request/adminRequest";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog"
import { Input } from "../../ui/input"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../ui/form"

import { Button } from "../../ui/button"
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const FormSchema = z.object({
    user_role_permission: z
        .string({
            required_error: "Please select a user permission to display.",
        })
})

export default function Roles() {

    const [data, setData] = useState<Permission[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getPermissionList();
                setData(responseData.data);
            } catch (error) {
                console.error("Error fetching user activity:", error);
            }
        };

        fetchData();
    }, []);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    })
    const [isDialogOpen, setIsDialogOpen] = useState(false); // Új állapot hozzáadása


    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const userRoleName = data.user_role_permission;
        await createPermission(userRoleName).then(async (data) => {
            if (!data.data) {
                toast.error("Entity is already exist");
            } else {
                toast.success("Entity created");
                const responseData = await getPermissionList();
                setData(responseData.data);
                setIsDialogOpen(false);
                form.reset();
            }

        }).catch((err) => {
                toast.error("Hiba", err);
        });
    }

    return (
        <PermissionAuth role="admin.useractivity">
            <div className="container mx-auto py-10">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline">Create a new entity</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Create a new entity</DialogTitle>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                                <FormField
                                    control={form.control}
                                    name="user_role_permission"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Permission Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Permission name" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your Permission name.
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
                <DataTable columns={columns} data={data} />
            </div>
        </PermissionAuth>
    )

}



