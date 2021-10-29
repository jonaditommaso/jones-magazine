import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/futbol/futbol.css';

function TeamAccessLink({team}) {
    return (
        <Link className="futbol__teams" to={`/club/${team}`}>
            <img src={`/assets/img/futbol-icons/${team}-big.png`} alt={team} />
        </Link>
    )
}

export default TeamAccessLink;
