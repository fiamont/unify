import style from './../styles/Topnavbar.module.css'
import Navbar from "./Navbar"
import SearchIcon from "./Icons/searchIcon"
import ProfileIcon from "./Icons/profileIcon"
import SvgUnifyLogo from './Icons/unifyLogo'

function Topnavbar () {
    return(
        <div className={style.topnavbar}>
            <div className={style.logo}>
            <SvgUnifyLogo/>
            <div className={style.Icons}>
                    <SearchIcon/>
                    <ProfileIcon/>
                </div>
            </div>
            <div className={style.navbar}>
               <Navbar />
            </div>
            <div>
                <hr />
            </div>
        </div>
    )
}
export default Topnavbar