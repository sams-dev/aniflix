import { useNavigate } from "react-router-dom";

const Header = ({ hideMenu }) => {
 const navigate = useNavigate();


 return (
  <header className="row main-header">
   <div className="col-2">
    <img className="img-header" src={require("../../assets/logo-aniflix-.png")} />
   </div>
   {!hideMenu && (<div className="col-8">
    <ul className="menu-list">
     <li>
      <a href="#"> Home</a>
     </li>
     <li>
      <a href="#"> Animes</a>
     </li>
     <li>
      <a href="#"> Filmes</a>
     </li>
     <li>
      <a href="#"> Minha Lista</a>
     </li>
     <button onClick={() => {navigate("/login")}} className="btn btn-md btn-danger btn-login">login</button>
     <button className="btn btn-md btn-config text-center">
      <span className="mdi mdi-menu"></span>
     </button>
    </ul>

   </div>)}

  </header>
 );
};

export default Header;