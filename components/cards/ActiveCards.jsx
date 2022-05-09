import { Card, CardContent, Typography, CardMedia, CardActionArea  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
const useStyle = makeStyles({
    cardPaper:{
        backgroundColor:"white",
        color: "black",
        paddingRight: "5%",
        paddingLeft: "5%",
    }
})
export default function ActiveCards(props){
    const classes = useStyle();
    const cardInfo = props.cardInfo;
    return <Card className={classes.cardPaper}>
                    <Link href={cardInfo.page}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={cardInfo.link}
                                alt={cardInfo.alt}
                            />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    {cardInfo.title}
                                </Typography>
                                <Typography variant="body2">
                                    {cardInfo.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
}
