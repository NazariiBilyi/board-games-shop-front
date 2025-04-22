import * as React from "react";
import {Button, Card, CardContent, CardHeader, Stack, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import { useStyles } from './styles.js'
import useCombinedStore from "../../store/store.ts";
import {FormInput} from "./types.ts";

interface IFormInput {
    firstName: string
    lastName: string
    email: string,
    password: string,
}

const Signup:React.FC = () => {

    const classes = useStyles();

    const signUp = useCombinedStore((state) => state.signUp)

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IFormInput> = async (data: FormInput):Promise<void> => {
        await signUp(data)
    }

    return (
        <Card sx={{ minWidth: 275 }} className={classes.card}>
            <CardHeader
                title="Sign Up"
            />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction="column" justifyContent='left' spacing={2}>
                        <Controller
                            name="firstName"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <TextField
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
                                <TextField
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
                        <Button type='submit'>Sign Up</Button>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    );
}

export default Signup;