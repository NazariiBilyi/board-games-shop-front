import Header from "./Header/Header.tsx";
import {Box} from "@mui/material";
import {useEffect} from "react";
import {useNavigate} from "react-router";
import useCombinedStore from "../../store/store.ts";


const Home = () => {

    const navigate = useNavigate();
    const token = useCombinedStore((state) => state.token)


    useEffect(() => {
        if(!token && !localStorage.getItem('accessToken')){
            navigate('/login')
        }
        if(token && !localStorage.getItem('accessToken')){
            localStorage.setItem('accessToken', token)
        }
    }, [navigate, token])

    return(
        <Box>
            <Header/>
        </Box>

    )
}

export default Home;