import React from 'react'
import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <ul className="mainMenu">
        <Link to="/Accueil">
            <li>Accueil</li>
        </Link>
        <Link to='/Cycling'>
            <li>Recycle moi !</li>
        </Link>
            
        </ul>
    )
}


export default Navigation