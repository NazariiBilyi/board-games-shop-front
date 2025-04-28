import { styled } from '@mui/material/styles';
import {TextField, TextFieldProps} from "@mui/material";

const FormTextField = styled(TextField)<TextFieldProps>(() => ({
    backgroundColor: 'rgb(221, 185, 119)',
    borderRadius: '10px',
    /* border: 2px solid rgb(138, 92, 45); */
    color: 'rgb(132, 92, 44)',
}))

export default FormTextField;