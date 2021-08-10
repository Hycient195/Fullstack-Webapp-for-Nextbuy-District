import { Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, CardHeader, Paper } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import pic from '../../../images/v640-peipei-16-modernbg.jpg'
import './itemCard.css'


const ItemCard = ({seller, itemPrice, itemName}) => {
    return ( 
            <Card>
               
                <CardMedia 
                    component='img'
                    className='pic'
                    image={pic}
                    title="The picture"
                />
                <CardContent>
                <Typography align="left" color='secondary' variant=''>{seller}</Typography><br/>
                <Typography variant='' color='textSecondary'>{itemName}</Typography><br/>
                <Typography variant='' >{itemPrice}</Typography>
                </CardContent>

            </Card>
            
     );
}
 
export default ItemCard;