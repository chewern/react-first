import { Link } from 'react-router-dom'
//using Link instead of <a> tag prevents to entire page from reloading
//instead will on refresh the relevant lines

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to='/about'>About</Link>
            
        </footer>
    )
}

export default Footer
