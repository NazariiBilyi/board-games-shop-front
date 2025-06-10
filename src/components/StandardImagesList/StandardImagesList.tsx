import {Button, Grid, IconButton, ImageList, ImageListItem, Tooltip} from "@mui/material";
import { IStandardImagesListProps} from "./types.ts";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {useStyles} from "./styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VisuallyHiddenInput from "../styled/VisuallyHiddenInput.tsx";

export const StandardImageList: React.FC<IStandardImagesListProps> = ({imageData, deleteImage, selectImage, selectFiles }) => {

    const classes = useStyles()

    const onSelectImage = (title: string) => () => {
        selectImage(title)
    }

    return (
        <Grid spacing={3}>
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
                        onChange={selectFiles}
                        multiple
                    />
                </Button>
            </Grid>
            <ImageList className={classes.imageList} cols={3} gap={20} rowHeight={300}>
                {imageData?.map((item) => (
                    <ImageListItem className={classes.imageListItem} key={item.src}>
                        <Tooltip title="Delete image" placement="top">
                            <IconButton className={classes.deleteButton} onClick={deleteImage(item?.title as string)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Select image as title'>
                            <img
                                onClick={onSelectImage(item?.title as string)}
                                src={item.src}
                                alt={item.title}
                                loading="lazy"
                                className={item.isTitle ? `${classes.image} ${classes.selectedImage}` : classes.image}
                            />
                        </Tooltip>
                    </ImageListItem>
                ))}
            </ImageList>
        </Grid>

    );
}