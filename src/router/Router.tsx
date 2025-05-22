import {Route, Routes} from "react-router";
import Home from "../containers/Home/Home.tsx";
import Login from "../containers/Login/Login.tsx";
import Signup from "../containers/SignUp/Signup.tsx";
import NotFound from "../containers/NotFound.tsx";
import ForgotPassword from "../containers/ForgotPassowrd/ForgotPassword.tsx";
import ResetPassword from "../containers/ResetPassword/ResetPassword.tsx";
import AdminRoute from "./AdminRoute.tsx";
import Layout from "../containers/Layout/Layout.tsx";
import AdminLayout from "../containers/AdminLayout/AdminLayout.tsx";
import ViewProducts from "../containers/AdminLayout/ViewProducts/ViewProducts.tsx";
import AddProducts from "../containers/AdminLayout/AddProducts/AddProducts.tsx";

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup/>} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password/:token/:userId" element={<ResetPassword />} />
                <Route index element={<Home/>} />
            </Route>
            <Route path='admin-panel' element={<AdminRoute><AdminLayout/></AdminRoute>}>
                <Route path='products' element={<ViewProducts />} />
                <Route path='add-product' element={<AddProducts />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router;