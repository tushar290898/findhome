import React, {useState} from 'react'
import '../Components/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

function Header() {

    const [search, setSearch] = useState("");

    return (
        <div className="header">
            <Link to="/">
                 <img src="https://creativeoverflow.net/wp-content/uploads/2016/11/home-logo-f-image-805x370.png"
            alt=""/> 
            </Link>      
            

        <div className="header-center">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Type something..."/>

            <Link to={`/search/${search}`}>
            <SearchIcon/>
            </Link>

        </div>
        {/* https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png */}
        

        <div className="header-right">
            <h3>Become a host</h3>
            <LanguageIcon />
            <ExpandMoreIcon/>
            <PersonIcon/>
        </div>

        </div>
    )
}

export default Header
