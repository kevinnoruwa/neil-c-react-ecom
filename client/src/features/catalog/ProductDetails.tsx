import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";


export default function ProductDetails(){
const {id} = useParams();

    return (
        <Typography variant="h2">
           Product details
        </Typography>
    )
}