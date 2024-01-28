import { request } from "../request";
export const getDeleteReasons = async () => {
  try {
    return await request(`/api/delete_reasons`, {
      method: "GET",
    });
  } catch (error) {
    throw error;
  }
};

export const getArchiveListRequest = async () => {
  try {
    return await request("/api/property/archive-list", {
      method: "GET",
    });
  } catch (error) {
    throw error;
  }
};

export const archiveDelete = async (propertyId, reasonId) => {
  try {
    return await request(`/api/property/archive`, {
      method: "DELETE",
      body: JSON.stringify({ propertyId: propertyId, reasonId: reasonId }),
    });
  } catch (error) {
    throw error;
  }
};

export const activateArchive = async (propertyId) => {
  try {
    return await request(`/api/property/archive/reactive`, {
      method: "POST",
      body: JSON.stringify({ propertyId: propertyId }),
    });
  } catch (error) {
    throw error;
  }
};
