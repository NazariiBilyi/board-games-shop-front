import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {CardContent, CardHeader, Stack} from "@mui/material";
import FormTextField from "../../components/styled/FormTextField.tsx";
import SubmitButton from "../../components/styled/SubmitButton.tsx";
import NavigationButton from "../../components/styled/NavigationButton.tsx";
import FormCard from "../../components/styled/FormCard.tsx";
import {useStyles} from "./styles";
import {useNavigate, useParams} from "react-router";
import {IResetPasswordForm} from "./types.ts";
import useCombinedStore from "../../store/store.ts";

const ResetPassword = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const params = useParams()

    const resetPassword = useCombinedStore((state) => state.resetPassword)

    console.log(params)


    const { control, handleSubmit, watch, formState: { errors }, } = useForm({
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
    })

    const onSubmit: SubmitHandler<IResetPasswordForm> = async (data: IResetPasswordForm):Promise<void> => {
        await resetPassword({
            password: data.password,
            token: params.token as string,
            userId: params.userId as string,
        }, goToLogin)
        console.log(data)
    }

    const goToLogin = () => {
        navigate('/login')
    }

    return(
        <FormCard className={classes.card}>
            <CardHeader className={classes.cardHeader}  />
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction="column" justifyContent='left' spacing={2}>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <FormTextField
                                    error={!!errors.password}
                                    helperText={!!errors.password && errors.password.message}
                                    label="Password"
                                    type="password" {...field} />
                            }/>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: true,
                                validate: (value) =>
                                    value === watch('password' )|| "The passwords do not match" }}
                            render={({ field }) =>
                                <FormTextField
                                    error={!!errors.confirmPassword}
                                    helperText={!!errors.confirmPassword && errors.confirmPassword.message}
                                    label="Confirm Password"
                                    type="password" {...field} />
                            }/>
                    </Stack>
                    <Stack marginTop='20px' flexDirection="column" justifyContent='space-between' alignItems='center' spacing={2}>
                        <SubmitButton className={classes.loginBtn} type='submit'>Change Password</SubmitButton>
                        <NavigationButton className={classes.signUpBtn} onClick={goToLogin}>Go to Login</NavigationButton>
                    </Stack>
                </form>
            </CardContent>
        </FormCard>
    )
}

export default ResetPassword;