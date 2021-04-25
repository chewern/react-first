import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({title}) => {
    const onClick = () => {
        console.log('clicked')
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='New Task' onClick={onClick} />
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
