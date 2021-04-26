import PropTypes from 'prop-types'
import Button from "./Button"
import { useLocation } from 'react-router-dom'
//useLocation is to control the display of "Add Task" button
//such that when in the "About" page, this button is not visible

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {(location.pathname === '/') &&
                (<Button color={showAdd ? 'red':'green'} 
                text={showAdd ? 'Close': 'Add Task'} 
                onClick={onAdd} />)
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

//take note: "propTypes" must start with lower case
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
