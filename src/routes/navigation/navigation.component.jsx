import { Fragment,useContext } from "react"
import { Link, Outlet} from "react-router-dom"
import './navigation.styles.scss'
import { UserContext } from "../../context/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
/*import {ReactComponent as CrwnLogo} from  "../../assets/crown.svg"*/

const Navigation = () => {
    const {currentUser} = useContext(UserContext)




    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={'/'}>
                <div className='logo'>Logo</div>
                </Link>
                <div className="nav-links-container">
                 <Link className="nav-link" to={'/shop'}>SHOP</Link>
                 {currentUser?(
                    <span className="nav-link"onClick={signOutUser}>
                        SIGN OUT
                        </span>) :(
                    <Link className="nav-link" to={'/auth'}>SIGN-IN</Link>

                 )}

                </div>
            </div>
            <Outlet/> 
        </Fragment>
    )
  }
  export default Navigation
  