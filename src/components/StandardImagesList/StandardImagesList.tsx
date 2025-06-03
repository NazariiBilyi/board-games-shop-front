import {IconButton, ImageList, ImageListItem, Tooltip} from "@mui/material";
import { IStandardImagesListProps} from "./types.ts";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {useStyles} from "./styles";
import {useState} from "react";

export const StandardImageList: React.FC<IStandardImagesListProps> = ({imageData, deleteImage, selectImage }) => {

    const [selectedImage, setSelectedImage] = useState<string>('')

    const classes = useStyles()

    const onSelectImage = (title: string) => () => {
        setSelectedImage(title)
        selectImage(title)
    }

    return (
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
                        className={selectedImage === item.title ? `${classes.image} ${classes.selectedImage}` : classes.image}
                    />
                </Tooltip>
            </ImageListItem>
        ))}
        </ImageList>
    );
}