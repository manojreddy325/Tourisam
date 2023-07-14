import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
    return(
        <nav>
            <ul className='nav-list-container'>
                <Link to="/" className="nav-items"><li>HOME</li></Link>
                <Link to="/honeymoons" className="nav-items"><li>HONEYMOONS</li></Link>
                <Link to="/holidays" className="nav-items"><li>HOLIDAYS</li></Link>
                <Link to="/clienttestimonial" className="nav-items"><li>CLIENT TESTIMONIAL</li></Link>
                <Link to="/blog" className="nav-items"><li>BLOG</li></Link>
                <Link to="/our-special-package" className="nav-items"><li>YATRA SPECIAL</li></Link>
                <Link to="/contact" className="nav-items"><li>CONTACT</li></Link>
            </ul>
        </nav>
    )
}

export default Header;