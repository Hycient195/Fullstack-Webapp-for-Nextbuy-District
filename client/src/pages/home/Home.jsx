import { Container, Grid } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useEffect } from 'react';
import useStyles from './Home.style.js'
import ItemCard from './itemCard/ItemCard.jsx';
import { fetchProducts } from '../../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'



const Posts = () =>{

    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    const products = useSelector((state)=> state.productReducer.data)
    console.log(products)

    return(
        <Container>
            <Grid container spacing={1}>
                {products && products.map((product)=>(
                    
                    <Grid item xs={6}>
                        <ItemCard
                        key={product._id}
                        seller={product.seller} 
                        itemPrice={product.itemPrice} 
                        itemName={product.itemName}  
                        />
                    </Grid>                    
                ))}
            </Grid>
           
         </Container>
    )
}

export default Posts