import { makeStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles({
    appBar : {
        height : 50,
        background : 'red'
    }, 
    search : {
        // marginTop : 50,
        width : '80%',
        borderRadius : 50,
        height : 40,
        border : 0,
        paddingLeft : 10
    }, 
    form : {
        textAlign : 'center',
        float : 'center'
    },
    nav : {
        position: 'absolute',
        width: "100%",
        height: 150,
        left: -1,
        top: -31,
        background: 'silver',
    },
    buttonGroup : {
        marginTop : 100,
        overflowX : 'scroll'
    }, 
    button : {
        fontSize : 9
    },
    ul : {
        marginTop : 100,
        overflowX : 'scroll',
        // listStyle : 'none',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },
    // a : {
    //     display: 'block',
    //     color: 'white',
    //     textAlign: 'center',
    //     padding: 16,
    //     textDecoration: 'none',
    // }
})

export default useStyles