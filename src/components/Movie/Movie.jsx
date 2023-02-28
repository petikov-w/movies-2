//import '../../style.scss';
import styles from './Movie.module.scss'

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

    return <div id={filmId} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" height="400" src={posterUrl} />
        </div>
        <div className={cardInfo}>
            <span className={styles.title}>{nameRu}</span>
            <div className={styles.flex2}>
                {rating.indexOf('%')===-1 ? ratingBox : ratingNot }
                <p className={styles.year}>{year}</p>
            </div>
        </div>
    </div>
}
export {Movie}