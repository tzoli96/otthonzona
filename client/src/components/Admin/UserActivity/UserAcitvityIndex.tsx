import { Activity, columns } from "./columns"
import { DataTable } from "./data-table"
import { getUserActivity } from "../../../utils/request/adminRequest";
import React, { useState, useEffect } from "react";
import PermissionAuth from '../../PermissionAuth';

export function UserAcitvityIndex() {
    const [data, setData] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getUserActivity();
                setData(responseData.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
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

