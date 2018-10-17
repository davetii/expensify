import React from 'react'
import { NavLink} from 'react-router-dom'
const Header = () => (
    <div>
        <h1>Expensify</h1>
        <div className="spacer">
            <NavLink to="/" activeClassName="is-active">Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
    </div>
);
export default Header;
