import {Route, Routes} from "react-router";
import Home from "../Home/Home.tsx";
import Login from "../Login/Login.tsx";
import Signup from "../SignUp/Signup.tsx";
import NotFound from "../NotFound.tsx";
import ForgotPassword from "../ForgotPassowrd/ForgotPassword.tsx";
import ResetPassword from "../ResetPassword/ResetPassword.tsx";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token/:userId" element={<ResetPassword />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router;