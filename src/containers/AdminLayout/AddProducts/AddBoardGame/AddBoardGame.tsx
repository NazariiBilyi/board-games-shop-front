import {Button, Grid, MenuItem, Stack, TextField} from "@mui/material";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisuallyHiddenInput from "../../../../components/styled/VisuallyHiddenInput.tsx";
import {ChangeEvent, useState} from "react";
import useCombinedStore from "../../../../store/store.ts";
import {IAddBoardGameProps, IFormInput} from "./types.ts";
import {transformBoardGame} from "./utils.ts";
import {StandardImageList} from "../../../../components/StandardImagesList/StandardImagesList.tsx";
import {IImageData} from "../../../../components/StandardImagesList/types.ts";
import * as React from "react";
import {AdminService} from "../../../../services/admin/admin.ts";

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
    const [imagePreviews, setImagePreviews] = useState<IImageData[]>([]);

    const addBoardGame = useCombinedStore(state => state.addNewProduct)

    const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            name: '',
            type: '',
            titleImage: null,
            images: null,
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

    const onUploadImages = async () => {
        const titleImage = getValues('titleImage') as File;
        const file = images.find(img => img.name === titleImage?.name)
        if(!file) {
            return {
                titleImageId: null,
                imagesId: null
            };
        }
        try {
            const formDataTitleImage = new FormData();
            formDataTitleImage.append("image", file);
            const formDataImages = new FormData();
            images.forEach((file) => formDataImages.append("images", file));
            const [titleImageRes, itemImagesRes] = await Promise.all([
                AdminService.uploadTitleImage(formDataTitleImage),
                AdminService.uploadItemImages(formDataImages)
            ])
            return {
                titleImageId: titleImageRes.data.imageId,
                imagesId: itemImagesRes.data.imagesId
            };
        }catch (e) {
            console.log(e)
            return {
                titleImageId: null,
                imagesId: null
            };
        }
    };


    const onSaveItem = async (data: IFormInput, titleImageId: string, imagesId: string) => {
        const boardGame = transformBoardGame(data);
        boardGame.titleImage = titleImageId as string;
        boardGame.images = imagesId as string;
        addBoardGame({
            item: boardGame,
            itemType: Number(itemType)
        })
    }



    const onSubmit: SubmitHandler<IFormInput> = async (data): Promise<void> => {
        const {titleImageId, imagesId} = await onUploadImages()
        if(titleImageId && imagesId) {
            await onSaveItem(data, titleImageId, imagesId)
        }
    }

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.target.files?.length && event.target.files.length > 0) {

            const files = Array.from(event.target.files);
            const previews =  files.map(file => ({
                src: URL.createObjectURL(file),
                title: file.name as string
            }))

            setImages(files);
            setImagePreviews(previews)
        }
    }

    const onDeleteImage = (title: string) => () => {
        setImagePreviews(prevImages => prevImages.filter(img => img.title !== title));
        setImages(prevImages => prevImages.filter(img => img.name !== title))
        const titleImage = getValues('titleImage');
        if(titleImage && titleImage instanceof File && titleImage.name === title) {
            setValue('titleImage', null, {
                shouldDirty: false,
                shouldTouch: false,
                shouldValidate: false,
            })
        }
    }

    const onSetImageAsTitle = (title: string) => {
        const titleImage = images.find(img => img.name === title)
        setValue('titleImage', titleImage as File, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
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
            <StandardImageList imageData={imagePreviews} deleteImage={onDeleteImage} selectImage={onSetImageAsTitle} />
            <Stack spacing={2} flexDirection='row' alignItems='center' justifyContent='center'>
                <Button disabled={!getValues('titleImage') || Object.entries(errors).length !== 0} type='submit'>Create Item</Button>
            </Stack>
        </form>
    )
}

export default AddBoardGame;