import style from './../styles/Topnavbar.module.css'
import Navbar from "./Navbar"
import SvgUnifyLogo from './Icons/unifyLogo'

function Topnavbar () {
    return(
        <header className={style.topnavbar}>
            <div className={style.images}>
            <SvgUnifyLogo className={style.unify}/>
            </div>
            <Navbar className={style.navbar}/>
            <hr />
        </header>
    )
}
export default Topnavbar