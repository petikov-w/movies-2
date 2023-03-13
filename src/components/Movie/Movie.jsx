import * as React from 'react';
import styles from './Movie.module.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Movie (props) {
    const {filmId, nameRu, year, rating, posterUrl} = props;

    const ratings = () => {
        if (Number(rating) <= 5) return <p className={styles.ratingBad}>{rating}</p>
        else if (Number(rating) > 5 && Number(rating) <= 7) return <p className={styles.ratingGood}>{rating}</p>
        else if (Number(rating) > 7 && Number(rating) <= 10) return <p className={styles.ratingBest}>{rating}</p>
    }

    const cardInfo =["card-content", styles.flex].join(' ');
    const ratingBox = ratings();
    const ratingNot = <p></p>

    // return <div id={filmId} className="card movie">
    //     <div className="card-image waves-effect waves-block waves-light">
    //         <img className="activator" height="400" src={posterUrl} />
    //     </div>
    //     <div className={cardInfo}>
    //         <span className={styles.title}>{nameRu}</span>
    //         <div className={styles.flex2}>
    //             {rating.indexOf('%')===-1 ? ratingBox : ratingNot }
    //             <p className={styles.year}>{year}</p>
    //         </div>
    //     </div>
    //</div>

     return (
             <Card id={filmId} sx={{ maxWidth: 345 }} raised="true">
                 <CardMedia
                     component="img"
                     alt="#"
                     height="400"
                     image={posterUrl}
                 />
                 <CardContent>
                     <div className={cardInfo}>
                         {/*<span className={styles.title}>{nameRu}</span>*/}
                         <div className={styles.flex2}>
                             {rating.indexOf('%')===-1 ? ratingBox : ratingNot }
                             <p className={styles.year}>{year}</p>
                         </div>
                     </div>
                 </CardContent>
                 <CardActions>
                     {/*<Button size="small">Share</Button>*/}
                     <Button size="small">Learn More</Button>
                 </CardActions>
             </Card>
         )






    // <Card id={filmId} sx={{ maxWidth: 345 }} raised="true">
    //     <CardMedia
    //         component="img"
    //         alt="#"
    //         height="300"
    //         image={posterUrl}
    //     />
    //     <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //             {nameRu}
    //         </Typography>
    //         {/*<Typography variant="body2" color="text.secondary">*/}
    //         {/*    Lizards are a widespread group of squamate reptiles, with over 6,000*/}
    //         {/*    species, ranging across all continents except Antarctica*/}
    //         {/*</Typography>*/}
    //     </CardContent>
    //     {/*<CardActions>*/}
    //     {/*    <Button size="small">Share</Button>*/}
    //     {/*    <Button size="small">Learn More</Button>*/}
    //     {/*</CardActions>*/}
    // </Card>
}
export {Movie}
