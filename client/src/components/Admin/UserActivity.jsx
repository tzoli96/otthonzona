import { getUserActivity } from "../../utils/request/adminRequest";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export function UserActivity() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserActivity()
        .then((responseData) => {
          setLoading(false);
          setData(responseData);
        })
        .catch((err) => {
          setLoading(false);
          console.error("Error fetching user activity:", err);
        });
  }, []);

  return (
      <div className="user-activity">
        <h1 className="text-4xl font-bold mb-8">User Activity</h1>
        <Table>
          <TableCaption>A list of your Activity Logs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">User</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Log</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
                <div className="flex justify-center h-48 items-center my-8 gap-4 font-medium text-gray-900">
                  <span>A Logok betöltése folyamatba van</span>
                </div>
            ) : (
                <div>
                  {data.data.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className=" w-[100px] font-medium">{item.user.email}</TableCell>
                        <TableCell>{item.subject}</TableCell>
                        <TableCell>{item.activity}</TableCell>
                        <TableCell className="text-right">{item.created_at}</TableCell>
                      </TableRow>
                  ))}
                </div>
            )}
          </TableBody>
        </Table>
      </div>
  );
}
