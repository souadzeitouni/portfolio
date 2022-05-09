import { Grid } from '@material-ui/core'
import ActiveCards from './ActiveCards'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
        gridContainer:{
            position: "absolute",
            paddingRight: "700px",
            maxWidth: "100%"
        }
    })

 function CardGrid(props){
    const classes = useStyle();
    var listOfCards = props.cardsInfo;
    return (
            <Grid container className={classes.gridContainer} spacing={5}>
                {
                    listOfCards.map(function(cardInfo, i){
                                return <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={i}>
                                        <ActiveCards cardInfo={cardInfo}/>
                                        </Grid>
                                })
                }
            </Grid>
    )
}

export default CardGrid