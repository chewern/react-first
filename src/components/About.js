import { Link } from 'react-router-dom'
//using Link instead of <a> tag prevents to entire page from reloading
//instead will on refresh the relevant lines

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
