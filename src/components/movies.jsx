import {Movie} from './movie'
import styles from '../style.scss';

function Movies(props) {
  const { movies } = props;

  return (
      <div className={styles.movies}>
        {movies.map((movie) => (
          <Movie key={movie.filmId} {...movie} />
        ))}
      </div>
  );
}
export { Movies };

