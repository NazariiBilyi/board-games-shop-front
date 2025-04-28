import {Route, Routes} from "react-router";
import Home from "./containers/Home/Home.tsx";
import Login from "./containers/Login/Login.tsx";
import Signup from "./containers/SignUp/Signup.tsx";
import NotFound from "./containers/NotFound.tsx";
import ForgotPassword from "./containers/ForgotPassowrd/ForgotPassword.tsx";
import ResetPassword from "./containers/ResetPassword/ResetPassword.tsx";

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