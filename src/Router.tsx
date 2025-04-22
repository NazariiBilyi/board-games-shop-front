import {Route, Routes} from "react-router";
import Home from "./containers/Home.tsx";
import Login from "./containers/Login.tsx";
import Signup from "./containers/SignUp/Signup.tsx";
import NotFound from "./containers/NotFound.tsx";

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Router;