import * as React from "react";
import { CardContent, CardHeader, Stack } from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import { useStyles } from './styles.js'
import useCombinedStore from "../../store/store.ts";
import {IFormInput} from "./types.ts";
import {useNavigate} from "react-router";
import FormCard from "../../components/styled/FormCard.tsx";
import FormTextField from "../../components/styled/FormTextField.tsx";
import SubmitButton from "../../components/styled/SubmitButton.tsx";
import NavigationButton from "../../components/styled/NavigationButton.tsx";

const Signup:React.FC = () => {

    const classes = useStyles();

    const navigate = useNavigate();

    const signUp = useCombinedStore((state) => state.signUp)

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput):Promise<void> => {
        await signUp(data, goToLogin)
    }

    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <FormCard className={classes.card}>
            <CardHeader className={classes.cardHeader}/>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction="column" justifyContent='left' spacing={2}>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <FormTextField
                                    error={!!errors.firstName}
                                    helperText={!!errors.firstName && 'First Name is required'}
                                    label="First Name"
                                    type="text" {...field} />
                            }/>
                        <Controller
                            name="lastName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <FormTextField
                                    error={!!errors.lastName}
                                    helperText={!!errors.lastName && 'Last Name is required'}
                                    label="Last Name"
                                    type="text" {...field} />
                            }/>
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
                        <Stack direction="column" alignItems='center' justifyContent='space-between' spacing={2}>
                            <SubmitButton className={classes.signUpBtn} type='submit'>Sign Up</SubmitButton>
                            <NavigationButton className={classes.loginBtn} onClick={goToLogin}>Go to Login</NavigationButton>
                        </Stack>
                    </Stack>
                </form>
            </CardContent>
        </FormCard>
    );
}

export default Signup;