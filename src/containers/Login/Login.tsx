import * as React from "react";
import { CardContent, CardHeader, Stack } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useStyles } from "./styles";
import { IFormInput } from "./types.ts";
import { useNavigate } from "react-router";
import useCombinedStore from "../../store/store.ts";
import { useEffect } from "react";
import FormTextField from "../../components/styled/FormTextField.tsx";
import FormCard from "../../components/styled/FormCard.tsx";
import SubmitButton from "../../components/styled/SubmitButton.tsx";
import NavigationButton from "../../components/styled/NavigationButton.tsx";

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
        const token = localStorage.getItem('accessToken');
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
        <FormCard className={classes.card}>
            <CardHeader className={classes.cardHeader}  />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction="column" justifyContent='left' spacing={2}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <FormTextField
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
                                <FormTextField
                                    error={!!errors.password}
                                    helperText={!!errors.password && 'Passowrd is required'}
                                    label="Password"
                                    type="password" {...field} />
                            }/>
                        <Stack flexDirection="column" justifyContent='space-between' alignItems='center' spacing={2}>
                            <SubmitButton className={classes.loginBtn} type='submit'>Login</SubmitButton>
                            <NavigationButton className={classes.signUpBtn} onClick={forgotPassword}>Forgot Password</NavigationButton>
                            <NavigationButton className={classes.signUpBtn} onClick={goToSignup}>Sign up</NavigationButton>
                        </Stack>
                    </Stack>
                </form>
            </CardContent>
        </FormCard>
    );
}

export default Login;