import {styled} from "@mui/material/styles";
import {Box, BoxProps} from "@mui/material";
import parchmentTexture from "../../assets/images/parchment-texture.png";

export const ParchmentBox = styled(Box)<BoxProps>(() => ({
    background: `url(${parchmentTexture}) no-repeat center center`,
    backgroundSize: "cover",
    padding: "20px 40px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
    color: "#2b1a0e",
    textShadow: "1px 1px 0 #f3e6c0",
    width: 'fit-content'
}))