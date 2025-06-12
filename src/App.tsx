import Router from "@router/Router";
import {useEffect} from "react";
import useCombinedStore from "@store/store";
import {jwtDecode} from "jwt-decode";
import {IJWTPayload} from "@store/authSlicer/types";
import MessageSnackbar from "@components/MessageSnackbar/MessageSnackbar.tsx";

function App() {
    const setAuthState = useCombinedStore(state => state.updateAuthState)

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) return;
        const decoded = jwtDecode(token) as IJWTPayload;

        setAuthState({ userRole: decoded.userRole, token: token });
    }, [setAuthState])

    return (
        <>
            <Router />
            <MessageSnackbar />
        </>
    )
}

export default App
