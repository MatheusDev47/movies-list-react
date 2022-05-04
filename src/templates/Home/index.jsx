import { Component } from 'react';

import './style.css'

import { Films } from '../../components/Films'
import { loadFilms } from '../../utils/loadFilms'
import { ButtonPage } from '../../components/ButtonPage';
import { NavBar } from '../../components/NavBar';
import { InputSearch } from '../../components/InputSearch';
import { ParagraphMessage } from '../../components/ParagraphMessage';

export class Home extends Component {
  state = {
    allFilms: [],
    films: [],
    page: 0,
    filmsPerPage: 5,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadFilms()
  }

  loadFilms = async() => {
    const { films, filmsPerPage } = this.state
    const filmsJson = await loadFilms()
    
    this.setState({ 
      allFilms: filmsJson.results, 
      films: filmsJson.results.slice(films, filmsPerPage) 
    })
  }

  loadMoreFilms = () => {
    const { allFilms, films, page, filmsPerPage } = this.state
    const nextPage = page + filmsPerPage
    const nextFilms = allFilms.slice(nextPage, nextPage + filmsPerPage)

    films.push(...nextFilms)
    this.setState({ films, page: nextPage })
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {
    const { page, allFilms, films, filmsPerPage, searchValue } = this.state

    const filteredMovies = !!searchValue 
    ? allFilms.filter(movie => { return movie.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) }) 
    : films

    const noMoreFilms = page + filmsPerPage >= allFilms.length || filteredMovies !== films

    return(

      <div className="home">
        <header>
          <NavBar />
        </header>
        <section className="films">

          {!!searchValue && (
            <ParagraphMessage message={'Search: ' + searchValue}/>
          )}

          <InputSearch 
          onChange={this.handleChange} 
          value={searchValue} 
          />

          {filteredMovies.length > 0 && (
            <Films films={filteredMovies} />
          )}

          {filteredMovies.length === 0  &&(
            <ParagraphMessage message='the movie doesn´t exist' />
          )}

          <ButtonPage 
          onClick={this.loadMoreFilms}
          disabled={noMoreFilms}
          />
        </section>
      </div>

    )
  }
}
