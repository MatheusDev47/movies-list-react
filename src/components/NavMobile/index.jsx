import './style.css'

import { XLg } from 'react-bootstrap-icons'

export const NavMobile = ({ onClick }) => {
    return (
        <nav className="navbar-mobile">
            <div className="button">
                <XLg onClick={onClick} className="button-menu-close"/>
            </div>
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
        </nav>
    )
}