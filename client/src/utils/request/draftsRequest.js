import { request } from "../request";
export const deleteDraftProperty = async (propertyId) => {
    try {
        return await request(`/api/draft_property/delete`, {
            method: 'DELETE',
            body: JSON.stringify({id:propertyId}),
        });
    } catch (error) {
        throw error;
    }
};

