import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    imageList: {
        width: '500px',
        minHeight: '210px'
    },
    imageListItem: {
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        cursor: 'pointer'
    },
    selectedImage: {
      border: '3px solid blue'
    },
    deleteButton: {
        width: 'fit-content'
    }
})