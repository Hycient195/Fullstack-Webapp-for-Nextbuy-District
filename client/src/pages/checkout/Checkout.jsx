import { Container, Grid, CircularProgress } from '@material-ui/core'
import { useEffect, useState } from 'react'
import ItemCard from './itemCard/ItemCard'
import './checkout.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserCart } from '../../actions/userActions'

const Checkout = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const userId = {
        userId : user.result._id
    }

    useEffect(()=>{
        dispatch(fetchUserCart(userId))
    }, [])


    const userCart = useSelector((result)=> result.userReducer.result)

  
    // console.log(userCart)

    return ( 
        <Container className='container'>
            
        <Grid  container spacing={1}>

        {
            !userCart && (
                <CircularProgress color="secondary" className="loading"/>
            )
        }
            
        {
            userCart && (
                    userCart.map((product, index) => (
                    <Grid item xs={4} md={3} lg={3} key={index}>
                    <ItemCard
                        seller={product.seller} 
                        itemPrice={product.itemPrice} 
                        itemName={product.itemName}  
                        itemDetails={product.itemDetails}
                        itemId={product._id}
                        itemImage={product.itemImage}
                        itemIndex={index}
                        userId={userId}
                    />
                </Grid>  
                ))
            ) 
        }
        </Grid>
        </Container>
     );
}
 
export default Checkout;