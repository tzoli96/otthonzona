import React from 'react';
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import CryptoJS from "crypto-js";

const PermissionAuth = ({ role , children }) => {
    const permissions = useAuthUser()?.encryptedPermissions.map(encryptedPermission => {
        const bytes = CryptoJS.AES.decrypt(encryptedPermission, 'yourSecretKey');
        const decryptedPermissionString = bytes.toString(CryptoJS.enc.Utf8);
        const decryptedPermission = JSON.parse(decryptedPermissionString);
        return decryptedPermission;
    });
    const userHasPermission = permissions.some(permission => permission.name === role);

    return userHasPermission ? <>{children}</> : null;
};

export default PermissionAuth;
