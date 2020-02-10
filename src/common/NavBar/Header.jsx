import React,{Component} from 'react';
import "./Header.css";
class Header extends Component {
   
    render() { 
        return ( 
        <nav className="navbar navbar-light bg-gray">
            <p className="navbar-brand" href="#">Spotify Artist Search</p>
        </nav>
        );
    }
}
 
export default Header;