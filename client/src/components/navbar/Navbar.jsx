import { Container, Button, ButtonGroup, AppBar, Typography, TextField, Card, CardContent, CardHeader, CardActions } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import App from '../../App'
import useStyles from './Navbar.style'

const Navbar = () =>{

  const classes = useStyles()

  return(
    <Container >
          <AppBar className={classes.appBar} >
             <Typography className='' variant="h6" align="center">NEXAPP</Typography>
          {/* <img src="" height="" alt=""/> */}

            <form className={classes.form}>
              <label htmlFor="">
                <input type="text"
                  className={classes.search}
                  placeholder="Search"
                />
              </label>
            </form>

            
          </AppBar>
          
          <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li><a href=""> For you</a></li>
                <li><a href=""> For you</a></li>
                {/* <li><a href=""> For you</a></li>
                <li><a href=""> For you</a></li> */}


              </ul>
              
            </nav>

         


        
    </Container>
  )
}

export default Navbar