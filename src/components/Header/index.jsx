
import { NavLink } from 'react-router-dom'
import routes from '../../router'

const Header = () => {
    return (
        <NavLink to={routes.auth.login}>
            Login
        </NavLink>
    )
}

export default Header