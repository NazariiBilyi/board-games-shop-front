import {Button, Grid, MenuItem, Stack, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisuallyHiddenInput from "../../../../components/styled/VisuallyHiddenInput.tsx";
import {ChangeEvent, useState} from "react";
import useCombinedStore from "../../../../store/store.ts";
import {IAddBoardGameProps, IFormInput} from "./types.ts";
import {transformBoardGame} from "./utils.ts";

const availabilityOptions = [
    {
        value: 'true',
        label: 'Available'
    },
    {
        value: 'false',
        label: 'Not Available'
    }
]

const AddBoardGame: React.FC<IAddBoardGameProps> = ({itemType}) => {

    const [images, setImages] = useState<File[]>([]);

    const addBoardGame = useCombinedStore((state) => state.addNewProduct)
    const uploadImages = useCombinedStore(state => state.uploadItemImages)

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

    const onUploadImages = async (itemId: string) => {
        const formData = new FormData();
        images.forEach((image) => {
            formData.append('images', image); // name should match your backend expectation
        });
        formData.append('itemId', itemId);
        await uploadImages(formData)
    }

    const onSubmit: SubmitHandler<IFormInput> = async (data): Promise<void> => {
        const boardGame = transformBoardGame(data)
        addBoardGame({
            item: boardGame,
            itemType: Number(itemType)
        }, onUploadImages)
    }

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImages(Array.from(event.target.files));
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid size={5}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                error={!!errors.name}
                                helperText={!!errors.name && 'Name is required'}
                                label="Name"
                                type="text" {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="type"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                error={!!errors.type}
                                helperText={!!errors.type && 'Type is required'}
                                label="Type"
                                type="text" {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="price"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                error={!!errors.price}
                                helperText={!!errors.price && 'Price is required'}
                                label="Price"
                                type="text" {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="availability"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                select
                                fullWidth
                                error={!!errors.availability}
                                helperText={errors.availability ? 'Availability is required' : 'Please select availability'}
                                label="Availability"
                                {...field}>
                                {availabilityOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="ageRestrictions"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                error={!!errors.ageRestrictions}
                                helperText={!!errors.ageRestrictions && 'Age restrictions is required'}
                                label="Age restrictions"
                                type="text"
                                {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="vendor"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                error={!!errors.vendor}
                                helperText={!!errors.vendor && 'Vendor is required'}
                                label="Vendor"
                                type="text"
                                {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="gameTime"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                error={!!errors.gameTime}
                                helperText={!!errors.gameTime && 'Game time is required'}
                                label="Game time"
                                type="text"
                                {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="numberOfPlayers"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                error={!!errors.numberOfPlayers}
                                helperText={!!errors.numberOfPlayers && 'Number of players is required'}
                                label="Number of players"
                                type="text"
                                {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="language"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                error={!!errors.language}
                                helperText={!!errors.language && 'Language is required'}
                                label="Language"
                                type="text"
                                {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) =>
                            <TextField
                                fullWidth
                                multiline
                                error={!!errors.description}
                                helperText={!!errors.description && 'Description is required'}
                                label="Description"
                                type="textarea"
                                rows={5}
                                {...field} />
                        }/>
                </Grid>
                <Grid size={5}>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload files
                        <VisuallyHiddenInput
                            type="file"
                            onChange={onFileChange}
                            multiple
                        />
                    </Button>
                </Grid>
            </Grid>
            <Stack spacing={2} flexDirection='row' alignItems='center' justifyContent='center'>
                <Button type='submit'>Create Item</Button>
            </Stack>
        </form>
    )
}

export default AddBoardGame;