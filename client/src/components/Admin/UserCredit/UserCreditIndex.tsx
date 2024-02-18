import { Credit, columns } from "./columns"
import { DataTable } from "./data-table"
import { getUserCredit } from "../../../utils/request/adminRequest";
import React, { useState, useEffect } from "react";
import PermissionAuth from '../../PermissionAuth';

export function UserCreditIndex() {
    const [data, setData] = useState<Credit[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getUserCredit();
                setData(responseData.data);
            } catch (error) {
                console.error("Error fetching user credit:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <PermissionAuth role="admin.creditmanagement">
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </PermissionAuth>
    )
}

