import { Grid, Typography, Divider, TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useParams } from "react-router-dom";
import React from 'react'
import axios from "axios";
import {Product} from "../../app/models/product"


export default function ProductDetails(){
const {id} = useParams<{id:string}>();

const [product, setProduct] = React.useState<Product | null>(null)
const [loading, setLoading] = React.useState(true)
   
   React.useEffect(() => {
    axios.get(`http://localhost:5000/api/Products/${id}`)
    .then((res) => setProduct(res.data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

   }, [id])


   if(loading) return <h3>Loading ...</h3>

   if(!product) return<h3>Product not found</h3>




    return (
       <Grid container spacing={6}>
        <Grid item xs={6}>
            <img style={{width:'100%'}} src={product.pictureUrl} alt={product.name}></img>
        </Grid>

        <Grid item xs={6}>
            <Typography  variant='h3'>{product.name}</Typography >
            <Divider sx={{mb: 2}}/>
            <Typography  variant='h4'  color='secondary'>{(product.price/100).toFixed(2)}</Typography >

            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{product.name}</TableCell> 
                        </TableRow>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>{product.description}</TableCell> 
                        </TableRow>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>{product.type}</TableCell> 
                        </TableRow>
                        <TableRow>
                            <TableCell>Brand</TableCell>
                            <TableCell>{product.brand}</TableCell> 
                        </TableRow>
                        <TableRow>
                            <TableCell>Quantity in stock</TableCell>
                            <TableCell>{product.quantityInStock}</TableCell> 
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>

       </Grid>
    )
}