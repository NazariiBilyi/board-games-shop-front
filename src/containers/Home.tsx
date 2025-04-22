import {useEffect} from "react";
import useCombinedStore from "../store/store.ts";
import {useNavigate} from "react-router";
import {Button} from "@mui/material";

const Home = () => {

    const navigate = useNavigate();
    const token = useCombinedStore((state) => state.token)
    const clearToken = useCombinedStore((state) => state.clearToken)

    useEffect(() => {
        if(!token && !localStorage.getItem('token')){
            navigate('/login')
        }
        if(token && !localStorage.getItem('token')){
            localStorage.setItem('token', token)
        }
    }, [navigate, token])

    const logout = () => {
        localStorage.removeItem('token')
        clearToken()
        navigate('/login')
    }

    return(
        <div>
            <Button onClick={logout}>Log out</Button>
        </div>
    )
}

export default Home;