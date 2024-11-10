import '../style/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
return(
    <>
        
        <div className="container">
            <h1 className='nav-header'>MyWebsite</h1>
            <div className='nav-list'>
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/contact">Contact</Link>
                <Link to="about">About</Link>
            </div>


        </div>

        
    </>
)
}

export default Navbar