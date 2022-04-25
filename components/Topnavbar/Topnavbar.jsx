import './Topnavbar.css'
import Navbar from "../Navbar/Navbar"
import SearchIcon from "../Icons/searchIcon"
import ProfileIcon from "../Icons/profileIcon"
import SvgUnifyLogo from '../Icons/unifyLogo'

function Topnavbar () {
    return(
        <div className='topnavbar'>
            <div className='logo'>
            <SvgUnifyLogo/>
            <div className="Icons">
                    <SearchIcon/>
                    <ProfileIcon/>
                </div>
            </div>
            <div className="navbar">
                <Navbar />
            </div>
            <div>
                <hr />
            </div>
        </div>
    )
}
export default Topnavbar