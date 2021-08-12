import { Container, Typography, TextField, Button } from '@material-ui/core'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { login } from '../../actions/userActions'
import { useHistory } from 'react-router-dom'
import './login.css'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    const user = { email, password }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(login(user, history))
    }

    return ( 
        <Container className="container">
            <form>
                <TextField
                    variant="outlined"
                    fullWidth
                    label="Email"
                    required
                    type="email"
                    color="secondary"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <br/> <br/>
                <TextField
                    variant="outlined"
                    fullWidth
                    label="Password"
                    required
                    type="password"
                    color="secondary"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br/><br/>
                <Button variant="outlined" color='secondary' onClick={handleSubmit} type="submit">Login</Button>
            </form>
        
        </Container>
     );
}
 
export default Login;