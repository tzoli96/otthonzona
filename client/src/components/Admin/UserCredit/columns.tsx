"use client"

import { ColumnDef } from "@tanstack/react-table"
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";
import { MoreHorizontal } from "lucide-react";
import { Dialog, DialogContent } from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { updateUserCredit } from "../../../utils/request/adminRequest";

export type Credit = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    credit: number;
};

export const columns: ColumnDef<Credit>[] = [
    {
        id: 'name',
        header: "Name",
        cell: ({ row }) => {
            const credit = row.original;

            return `${credit.firstName} ${credit.lastName}`;
        },
    },
    {
        id: 'email',
        accessorKey: "email",
        header: "Email",
    },
    {
        id: 'balance',
        accessorKey: "credit",
        header: "Balance",
    },
    {
        id: "action",
        cell: ({ row }) => {
            const credit = row.original;
            const [isEdit, setIsEdit] = React.useState(false);
            const [changeDirection, setChangeDirection] = React.useState('');
            const [amount, setAmount] = React.useState(0);
            const [errorMessage, setErrorMessage] = React.useState('');

            const onSubmit = (event: React.FormEvent) => {
                if (changeDirection && amount) {
                    updateUserCredit(credit.id, changeDirection, amount);
                } else {
                    event.preventDefault();

                    if (!changeDirection || (changeDirection != 'minus' && changeDirection != 'plus')) {
                        setErrorMessage('Please select plus or minus');
                    } else if (!amount) {
                        setErrorMessage('Please set amount');
                    }
                }
            };

            return (
                <React.Fragment>
                    <Dialog open={isEdit} onOpenChange={setIsEdit}>
                        <DialogContent>
                            <form onSubmit={onSubmit}>
                                <div className="flex w-full max-w-sm items-center space-x-2">
                                    <Select onValueChange={
                                        (value) => setChangeDirection(value)
                                    }>
                                        <SelectTrigger>
                                            <SelectValue placeholder="ChangeDirection"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem key='minus' value='minus'>
                                                Minus
                                            </SelectItem>
                                            <SelectItem key='plus' value='plus'>
                                                Plus
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input type='number' placeholder="Amount" onChange={
                                        (e) => setAmount(parseInt(e.target.value))
                                    }/>
                                </div>
                                {errorMessage && (
                                  <div className='text-red-700 text-sm'>
                                      {errorMessage}
                                  </div>
                                )}
                                <div className="mt-4">
                                    <Button type="submit">Submit</Button>
                                </div>
                            </form>
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
                            <DropdownMenuItem onClick={() => {setIsEdit(true)}}>
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </React.Fragment>
            )
        }
    },
]
