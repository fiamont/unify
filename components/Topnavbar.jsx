import style from './../styles/Topnavbar.module.css'
import Navbar from "./Navbar"
import SearchIcon from "./Icons/searchIcon"
import ProfileIcon from "./Icons/profileIcon"
import SvgUnifyLogo from './Icons/unifyLogo'

function Topnavbar () {
    return(
        <header className={style.topnavbar}>
            <div className={style.images}>
            <SvgUnifyLogo className={style.unify}/>
            <div className={style.Icons}>
                <SearchIcon/>
                <ProfileIcon/>
            </div>
            </div>
            <Navbar className={style.navbar}/>
            <hr />
        </header>
    )
}
export default Topnavbar