import {request} from "../request";

export const getUserActivity = async () => {
    try {
        return await request(`/admin/user_activity`, {
            method: "GET",
        });
    } catch (error) {
        throw error;
    }
};