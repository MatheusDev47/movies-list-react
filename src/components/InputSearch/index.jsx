import './style.css'

export const InputSearch = ({ onChange, value }) => {
    return (
        <input onChange={onChange} value={value} type="search" placeholder="Search for movies" />
    )   
}