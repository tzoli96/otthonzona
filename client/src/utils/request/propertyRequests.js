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


export const finalPropertyDelete = async (propertyId) => {
    try {
        return await request(`/api/property/`, {
            method: 'DELETE',
            body: JSON.stringify({propertyId:propertyId}),
        });
    } catch (error) {
        throw error;
    }
};
