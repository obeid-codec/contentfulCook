import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
       <nav className="navbar navbar-dark bg-secondary navbar-expand-sm" >
       <div className="container">
                <NavLink to="/" className="navbar-brand">React Routing</NavLink>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/meals" className="nav-link">Meals</NavLink>
                        </li>
  
                        <li className="nav-item">
                            <NavLink to="/meals/breakfast" className="nav-link">Breakfast</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/meals/lunch" className="nav-link">Lunch</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/meals/dinner" className="nav-link">Dinner</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
       </nav>
    </React.Fragment>
    )
}

export default Navbar
