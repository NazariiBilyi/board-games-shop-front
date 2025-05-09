import FormCard from "../../components/styled/FormCard.tsx";
import {CardHeader} from "@mui/material";
import {useStyles} from "./styles";
import {useForm} from "react-hook-form";

const AddShopItem = () => {
    const classes = useStyles();

    const { control, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: {
            name: '',
            type: '',
            price: '',
            availability: '',
            description: '',
            ageRestrictions: '',
            vendor: '',
            gameTime: '',
            numberOfPlayers: '',
            language: ''
        },
    })

    return(
        <FormCard className={classes.card}>
            <CardHeader className={classes.cardHeader}  />
        </FormCard>
    )
}

export default AddShopItem;