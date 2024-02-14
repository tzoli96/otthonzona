
import React, { useState, useEffect } from "react";
import PermissionAuth from '../../PermissionAuth';
import { DataTable } from "./Assign/data-table"
import {columns, UserRole} from "./Assign/columns"
import {getUserRoleList } from "../../../utils/request/adminRequest";

export default function Assign() {

    const [data, setData] = useState<UserRole[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getUserRoleList();
                setData(responseData.data);
            } catch (error) {
                console.error("Error fetching user activity:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <PermissionAuth role="admin.useractivity">
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </PermissionAuth>
    )

}



