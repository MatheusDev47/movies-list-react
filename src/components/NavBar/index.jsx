import './style.css'

import { List } from 'react-bootstrap-icons'

export const NavBar = ({ onClick }) => {
    return (  
        <nav className="navbar">
            <div className="container">
                <List className='button-menu-open' onClick={onClick}/>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Popular Movies</a>
                    </li>
                    <li>
                        <a href="#">More Movies</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}