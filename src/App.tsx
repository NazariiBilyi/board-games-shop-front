import Router from "./router/Router.tsx";
import {useEffect} from "react";
import useCombinedStore from "./store/store.ts";
import {jwtDecode} from "jwt-decode";
import {IJWTPayload} from "./store/authSlicer/types.ts";

function App() {
    const setState = useCombinedStore(state => state.setState)


    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (!token) return;
        const decoded = jwtDecode(token) as IJWTPayload;

        setState({ userRole: decoded.userRole, token: token });
    }, [setState])

    return (
        <Router />
  )
}

export default App
