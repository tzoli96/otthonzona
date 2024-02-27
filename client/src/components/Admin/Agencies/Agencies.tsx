import { Agency, columns } from "./columns"
import { DataTable } from "./data-table"
import { getAgencies } from "../../../utils/request/adminRequest";
import React, { useState, useEffect } from "react";
import PermissionAuth from '../../PermissionAuth';

export function Agencies() {
    const [data, setData] = useState<Agency[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getAgencies();
                setData(responseData.data);
            } catch (error) {
                console.error("Error fetching agencies:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <PermissionAuth role="admin.agency">
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </PermissionAuth>
    )
}

