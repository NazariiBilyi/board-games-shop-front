import {CardContent, CardHeader, Stack} from "@mui/material";
import FormCard from "../../components/styled/FormCard.tsx";
import {useStyles} from "./styles";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import FormTextField from "../../components/styled/FormTextField.tsx";
import {IForgotPasswordForm} from "./types.ts";
import SubmitButton from "../../components/styled/SubmitButton.tsx";
import NavigationButton from "../../components/styled/NavigationButton.tsx";
import {useNavigate} from "react-router";
import useCombinedStore from "../../store/store.ts";

const ForgotPassword = () => {
    const classes = useStyles();

    const forgotPassword = useCombinedStore((state) => state.forgotPassword);

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            email: '',
        },
    })

    const onSubmit: SubmitHandler<IForgotPasswordForm> = async (data: IForgotPasswordForm):Promise<void> => {
        console.log(window.location.protocol + '//' + window.location.host)

        await forgotPassword({
            email: data.email,
            environmentURL: window.location.protocol + '//' + window.location.host
        }, goToLogin)
    }

    const goToLogin = () => {
        navigate('/login')
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
                    </Stack>
                    <Stack marginTop='20px' flexDirection="column" justifyContent='space-between' alignItems='center' spacing={2}>
                        <SubmitButton className={classes.loginBtn} type='submit'>Send link</SubmitButton>
                        <NavigationButton className={classes.signUpBtn} onClick={goToLogin}>Go to Login</NavigationButton>
                    </Stack>
                </form>
            </CardContent>
        </FormCard>
    )
}

export default ForgotPassword;