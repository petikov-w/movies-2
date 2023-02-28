import {Movie} from '../Movie/Movie'
import styles from './Movies.module.scss';

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

