import * as React from "react";
import {Button, Card, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {useStyles} from "./styles";
import {IFormInput} from "./types.ts";
import {useNavigate} from "react-router";
import useCombinedStore from "../../store/store.ts";
import {useEffect} from "react";

const Login: React.FC = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const login = useCombinedStore((state) => state.login)

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            navigate('/')
        }
    }, [navigate])

    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput):Promise<void> => {
        await login(data, () => navigate('/'))
    }

    const goToSignup = () => {
        navigate('/signup')
    }

    const forgotPassword = () => {
        navigate('/forgot-password')
    }

    return (
        <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardHeader
                title="Login"
            />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction="column" justifyContent='left' spacing={2}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <TextField
                                    error={!!errors.email}
                                    helperText={!!errors.email && 'Email is required'}
                                    label="Email"
                                    type="email" {...field} />
                            }/>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <TextField
                                    error={!!errors.password}
                                    helperText={!!errors.password && 'Passowrd is required'}
                                    label="Password"
                                    type="password" {...field} />
                            }/>
                        <Stack direction="row" justifyContent='space-between' spacing={2}>
                            <Button type='submit'>Login</Button>
                            <Button onClick={forgotPassword}>Forgot Password</Button>
                            <Button onClick={goToSignup}>Create Account</Button>
                        </Stack>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    );
}

export default Login;