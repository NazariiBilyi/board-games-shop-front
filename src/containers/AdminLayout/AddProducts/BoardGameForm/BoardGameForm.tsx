import {Grid, IconButton, MenuItem, Stack, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {IAddBoardGameProps, IFormInput} from "./types.ts";
import * as React from "react";
import {useEffect} from "react";
import {useStyles} from "./styles";

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

const BoardGameForm: React.FC<IAddBoardGameProps> = ({ defaultValues, save, isEdit, disableSubmitButton}) => {

    const classes = useStyles()

    const { control, handleSubmit, reset, formState: { errors, dirtyFields } } = useForm<IFormInput>({
        defaultValues: defaultValues,
    })

    useEffect(() => {
        reset(defaultValues)
    }, [defaultValues, reset]);

    const onSubmit: SubmitHandler<IFormInput> = async (data): Promise<void> => {
        if(isEdit) {
            const filtered = (Object.keys(dirtyFields) as (keyof IFormInput)[]).reduce((acc, key) => {
                acc[key] = data[key];
                return acc;
            }, {} as Partial<IFormInput>);
            save(filtered)
        } else {
            save(data)
        }
    }

    const onChekIfDisableSubmitButton = (): boolean => {
        return disableSubmitButton || Object.entries(errors).length !== 0 || Object.keys(dirtyFields).length === 0
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} flexDirection='row' alignItems='center' justifyContent='flex-start'>
                <IconButton className={classes.submitButton} disabled={onChekIfDisableSubmitButton()} type='submit'><AddIcon />{isEdit ? 'Edit Item' : 'Create Item'}</IconButton>
            </Stack>
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
            </Grid>
        </form>
    )
}

export default BoardGameForm;