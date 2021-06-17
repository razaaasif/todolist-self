import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <a href="#" >Home</a>
                <a href="#" >Services</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a id="login" href="#">Login</a>
            </div>
        )
    }
}
export default Header;
