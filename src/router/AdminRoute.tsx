import {Outlet, Navigate} from "react-router"
import useCombinedStore from "@store/store.ts";
import {UserRoles} from "@store/authSlicer/types.ts";
import {IAdminRouteProps} from "./types.ts";
import * as React from "react";

const AdminRoute:React.FC<IAdminRouteProps> = ({children}) => {
    const userRole = useCombinedStore((state) => state.auth.userRole);

    if(userRole !== UserRoles.ADMIN) return <Navigate to="/" replace />

    return(
        children || <Outlet />
    )
}

export default AdminRoute