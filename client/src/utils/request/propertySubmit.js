import { request } from "../request";

export const submitProperty = async (url, body, method) => {
    try {
        const res = await request(url, {
            method: method,
            body: JSON.stringify(body),
        });

        return res?.data?.id;
    } catch (error) {
        throw error;
    }
};
