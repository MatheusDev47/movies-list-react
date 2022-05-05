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
                        <a href="#">Popular Films</a>
                    </li>
                    <li>
                        <a href="#">More Films</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}