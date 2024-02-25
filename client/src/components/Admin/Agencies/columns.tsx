"use client"

import { ColumnDef } from "@tanstack/react-table"
import React from "react";
import { Button } from "../../ui/button";
import { approveAgency, deleteAgency } from "../../../utils/request/adminRequest";

export type Agency = {
    id: string;
    officeName: string;
    officeAddress: string;
    officeEmail: string;
    officePhone: string;
    officeCompany: string;
    isActive: boolean;
};

export const columns: ColumnDef<Agency>[] = [
    {
        id: 'officeName',
        accessorKey: "officeName",
        header: "Office Name",
    },
    {
        id: 'officeAddress',
        accessorKey: "officeAddress",
        header: "Address",
    },
    {
        id: 'officeEmail',
        accessorKey: "officeEmail",
        header: "Email",
    },
    {
        id: 'officePhone',
        accessorKey: "officePhone",
        header: "Phone",
    },
    {
        id: 'officeCompany',
        accessorKey: "officeCompany",
        header: "Company",
    },
    {
        id: "action",
        cell: ({ row }) => {
            if (row.original.isActive) {
                return "";
            }

            const onApprove = () => {
                approveAgency(row.original.id);

                window.location.reload();
            };

            const onDisapprove = () => {
                deleteAgency(row.original.id);

                window.location.reload();
            };

            return (
                <React.Fragment>
                    <Button variant="outline" onClick={onApprove}>Approve</Button>
                    <Button variant="outline" onClick={onDisapprove}>Disapprove</Button>
                </React.Fragment>
            )
        }
    },
]
