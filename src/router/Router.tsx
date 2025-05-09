import {Route, Routes} from "react-router";
import Home from "../containers/Home/Home.tsx";
import Login from "../containers/Login/Login.tsx";
import Signup from "../containers/SignUp/Signup.tsx";
import NotFound from "../containers/NotFound.tsx";
import ForgotPassword from "../containers/ForgotPassowrd/ForgotPassword.tsx";
import ResetPassword from "../containers/ResetPassword/ResetPassword.tsx";
import AdminRoute from "./AdminRoute.tsx";
import AddShopItem from "../containers/AddShopItem/AddShopItem.tsx";
import AdminPanel from "../containers/AdminPanel/AdminPanel.tsx";
import Layout from "../containers/Layout/Layout.tsx";
import AdminLayout from "../containers/AdminLayout/AdminLayout.tsx";

const Router = () => {
    return (
        <Routes>

            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup/>} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token/:userId" element={<ResetPassword />} />
            <Route element={<Layout />}>
                <Route index element={<Home/>} />
            </Route>
            <Route element={<AdminLayout />}>
                <Route path="admin-panel" element={
                    <AdminRoute>
                        <AdminPanel />
                    </AdminRoute>
                }>
                    <Route path="add-product" element={<AddShopItem />} />
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router;