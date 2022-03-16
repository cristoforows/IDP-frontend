import { useNavigate } from "react-router-dom"
import './style.css'

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="NavContainer">
        <div className="NavContainer__left">HYPESTORE</div>
        <div className="NavContainer__right">
          <div className="navbar-text" onClick={()=>navigate('/')}>HOME</div>
          <div className="navbar-text" onClick={()=>navigate('/contactUs')}>CONTACT US</div>
          <div className="navbar-text">FAQ</div>
        </div>
      </div>
    )
}