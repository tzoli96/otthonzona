
import { Tabs, TabsContent, TabsList, TabsTrigger  } from "../../ui/tabs"
import React, { useState, useEffect } from "react";
import PermissionAuth from '../../PermissionAuth';
import Settings from "./Settings";
import Roles from "./Roles";
import Permissions from "./Permissions";
import Assign from "./Assign";
export function PermissionsIndex() {

    return (
        <PermissionAuth role="admin.useractivity">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="roles">Roles</TabsTrigger>
                    <TabsTrigger value="permissions">Permissions</TabsTrigger>
                    <TabsTrigger value="assign">Assign Permission to Role</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="roles">
                    <Roles></Roles>
                </TabsContent>
                <TabsContent value="permissions">
                    <Permissions></Permissions>
                </TabsContent>
                <TabsContent value="assign">
                    <Assign></Assign>
                </TabsContent>
                <TabsContent value="settings">
                    <Settings></Settings>
                </TabsContent>
            </Tabs>
        </PermissionAuth>
    )
}

