"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "../../ui/button"

export type Activity = {
    activity: string;
    created_at: string;
    id: string;
    subject: string;
    user: {
        credit: number;
        email: string;
        emailConfirmationToken: string;
        firstName: string;
        id: string;
        isAgent: boolean;
        isEmailVerified: boolean;
        lastName: string;
        phone: string;
        photo: null | string;
        pwHash: string;
        resetToken: string;
        resetTokenExpires: null | string;
        savedProperties: any[];
        userRoleId: string;
    };
    user_id: string;
};


export const columns: ColumnDef<Activity>[] = [
    {
        accessorKey: "subject",
        header: "Subject",
    },
    {
        id: 'userEmail',
        accessorKey: "user.email",
        header: "Email",
    },
    {
        accessorKey: "activity",
        header: "Activity",
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
        cell: ({ row }) => {
            const date = new Date(row.original.created_at);
            let formattedDate = date.getFullYear().toString();
            formattedDate += '-' + (date.getMonth() + 1).toString().padStart(2, '0');
            formattedDate += '-' + date.getDate().toString().padStart(2, '0');
            formattedDate += ' ' + date.getHours().toString().padStart(2, '0');
            formattedDate += ':' + date.getMinutes().toString().padStart(2, '0');
            formattedDate += ':' + date.getSeconds().toString().padStart(2, '0');

            return formattedDate;
        }
    },
]
