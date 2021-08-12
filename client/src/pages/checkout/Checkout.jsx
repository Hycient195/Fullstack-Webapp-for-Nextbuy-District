import { Container, Grid } from '@material-ui/core'
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
    }, [dispatch])


    const userCart = useSelector((result)=> result.userReducer.result)
    console.log(userCart)

    return ( 
        <Container>
        <Grid className='container' container spacing={1}>

            {
                userCart && userCart.map((product) => (
                    <Grid item xs={4} md={3} lg={3} key={product._id}>
                    <ItemCard
                        seller={product.seller} 
                        itemPrice={product.itemPrice} 
                        itemName={product.itemName}  
                        itemDetails={product.itemDetails}
                        itemId={product._id}
                    />
                </Grid>  
                ))
            }
        </Grid>
        </Container>
     );
}
 
export default Checkout;