import {api, request} from "../request";
import axios from "axios";
import Cookies from "js-cookie";

export const getUserActivity = async () => {
  try {
    return await request(`/api/activity_logs`, {
      method: "GET",
    });
  } catch (error) {
    throw error;
  }
};


export const getUserCredit = async () => {
  try {
    return await request(`/api/user/admin/users`, {
      method: "GET",
    });
  } catch (error) {
    throw error;
  }
};

export const updateUserCredit = async (userId, changeDirection, amount) => {
  try {
    return await request(`/api/user/admin/credit/manipulate`, {
      method: "POST",
      body: JSON.stringify({
        userid: userId,
        changedirection: changeDirection,
        amount: amount
      }),
    });
  } catch (error) {
    throw error;
  }
};
export const getUserRoleList = async () => {
  try {
    return await request(`/api/user/roles`, {
      method: "GET",
    });
  } catch (error) {
    throw error;
  }
};

export const getCurrentUserRoleId = async () => {
  try {
    return await request(`/api/user/current/role`, {
      method: "GET",
    });
  } catch (error) {
    throw error;
  }
};

export const updateCurrentRoleList = async (userRoleId) => {
  try {
    return await request(`/api/user/update/role`, {
      method: "POST",
      body: JSON.stringify({ userRoleId: userRoleId }),
    });
  } catch (error) {
    throw error;
  }
};

export const getUserRoleById = async (id) => {
  try {
    return await request(`/api/user/role/`+ id, {
      method: "GET"
    });
  } catch (error) {
    throw error;
  }
};

export const updateUserRoleNameById = async (id,name) => {
  try {
    return await request(`/api/user/role/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name }),
    });
  } catch (error) {
    throw error;
  }
};

export const createUserRole = async (name) => {
  try {
    return await request(`/api/user/role/`, {
      method: "POST",
      body: JSON.stringify({ name }),
    });
  } catch (error) {
    throw error;
  }
};


export const deleteUserRole = async (id) => {
  try {
    return await request(`/api/user/role/`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
  } catch (error) {
    throw error;
  }
};


//////Permissions
export const getPermissionList = async () => {
  try {
    return await request(`/api/user/permissions`, {
      method: "GET",
    });
  } catch (error) {
    throw error;
  }
};

export const createPermission = async (name) => {
  try {
    return await request(`/api/user/permissions/`, {
      method: "POST",
      body: JSON.stringify({ name }),
    });
  } catch (error) {
    throw error;
  }
};

export const updatePermissionNameById = async (id,name) => {
  try {
    return await request(`/api/user/permission/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name }),
    });
  } catch (error) {
    throw error;
  }
};

export const deletePermission = async (id) => {
  try {
    return await request(`/api/user/permissions/`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
  } catch (error) {
    throw error;
  }
};

//Asssign
export const getPermissionsByUserRoleId = async (id) => {
  try {
    return await request(`/api/user/assign/permission/${id}`, {
      method: "GET"
    });
  } catch (error) {
    throw error;
  }
};

export const updatePermission = async (entity,data) => {
  try {
    return await request(`/api/user/assign/user-permission`, {
      method: "POST",
      body: JSON.stringify({ entity, data }),

    });
  } catch (error) {
    throw error;
  }
};