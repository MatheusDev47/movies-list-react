import './style.css'

import { CardFilms } from '../CardFilms'

export const Films = ({ films }) => {
    return(
        <div className="content">
            {films.map(film => (
                <CardFilms 
                key={film.id}
                img={'https://image.tmdb.org/t/p/w500'+film.poster_path}
                title={film.title}
                overview={film.overview} 
                />    
            ))}
        </div>
    )
}