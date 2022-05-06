import { useEffect, useState } from 'react';

import './style.css'

import { Films } from '../../components/Films'
import { loadFilms } from '../../utils/loadFilms'
import { ButtonPage } from '../../components/ButtonPage';
import { NavBar } from '../../components/NavBar';
import { InputSearch } from '../../components/InputSearch';
import { ParagraphMessage } from '../../components/ParagraphMessage';
import { NavMobile } from '../../components/NavMobile';

export const Home = () => {
  const [allFilms, setAllFilms] = useState([])
  const [films, setFilms] = useState([])
  const [page, setPage] = useState('')
  const [filmsPerPage, setFilmsPerPage] = useState(5)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    handleLoadFilms()
  }, [])

  const handleLoadFilms = async() => {
    const filmsJson = await loadFilms()

    setAllFilms(filmsJson.results)
    setFilms(filmsJson.results.slice(films, filmsPerPage))
  }

  const loadMoreFilms = () => {
    const nextPage = page + filmsPerPage
    const nextFilms = allFilms.slice(nextPage, nextPage + filmsPerPage)
    films.push(...nextFilms)

    setFilms(films)
    setPage(nextPage)
  }

  const handleChange = e => {
    const { value } = e.target
    setSearchValue(value)
  }

  const handleOpenMenu = () => {
    const navMobile = document.querySelector('.navbar-mobile')
    const className = 'navbar-mobile-active'

    navMobile.classList.contains(className) 
      ? navMobile.classList.remove(className) 
      : navMobile.classList.add(className)
  }

  const filteredMovies = !!searchValue 
    ? allFilms.filter(movie => { return movie.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) }) 
    : films

  const noMoreFilms = page + filmsPerPage >= allFilms.length

  return (
    <div className="home">
      <header>
        <NavBar onClick={handleOpenMenu}/>
        <NavMobile onClick={handleOpenMenu}/>
      </header>
      <section className="films">

        {!!searchValue && (
          <ParagraphMessage message={'Search: ' + searchValue}/>
        )}

        <InputSearch 
        onChange={handleChange} 
        value={searchValue} 
        />

        {filteredMovies.length > 0 && (
          <Films films={filteredMovies} />
        )}

        {filteredMovies.length === 0  &&(
          <ParagraphMessage message='the movie doesn´t exist' />
        )}

        {!searchValue && (
          <ButtonPage 
          onClick={loadMoreFilms}
          disabled={noMoreFilms}
          />
        )}
      </section>
    </div>
  )
}