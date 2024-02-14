
import React, { useState, useEffect } from "react";
import PermissionAuth from '../../PermissionAuth';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { getUserRoleList , getCurrentUserRoleId, updateCurrentRoleList } from "../../../utils/request/adminRequest";

import { Button } from "../../ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select"

import { toast } from "react-hot-toast";

const FormSchema = z.object({
    default_user_role: z
        .string({
            required_error: "Please select a user role to display.",
        })
})

type userRole = {
    id: string;
    name: string;
};
type currentRole = {
    id: string;
};
export default function Settings() {

    const [data, setData] = useState<userRole[]>([]);
    const [currentRoleId, setCurrentRoleId] = useState<currentRole[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRoleList = await getUserRoleList();
                setData(userRoleList.data);
                const currentRoleList = await getCurrentUserRoleId();
                setCurrentRoleId(currentRoleList.data);
            } catch (error) {
                console.error("Error fetching user activity:", error);
            }
        };

        fetchData();
    }, []);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        values: {
            default_user_role: currentRoleId.toString(),
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const selectedUserRole = data.default_user_role;
        updateCurrentRoleList(selectedUserRole).
        then(r =>
            toast.success(`Default user role updated.`)
        );
    }
    return (
        <PermissionAuth role="admin.useractivity">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="default_user_role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Default user role</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a default user role" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {data.map((item) => (
                                            <SelectItem key={item.id} value={item.id}>
                                                {item.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </PermissionAuth>
    )
}



