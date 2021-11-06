import React from 'react'
import PropTypes from 'prop-types'

const NavBar = ({title, about, mode, toggleMode}) => {
    return (
        <div>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"> {title} </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a active" aria-current="page" href="#"> Home </a>
                            </li>                            
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                            <div className={`form-check form-switch text-${mode === 'light'? `dark`: `light`}`}>
                                <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label"  htmlFor="flexSwitchCheckDefault"> {mode === 'light'? 'Enable Dark Mode': 'Disable Dark Mode'} </label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar

// Its a check

NavBar.protoTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

// For a defualt values

NavBar.defaultProps = {
    title: "Titlte Here",
    about: "About Here"
}