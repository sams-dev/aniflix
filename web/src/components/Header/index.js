

const Header = ({ hideMenu }) => {

 return (
  <header class="row main-header">
   <div class="col-2">
    <img class="img-header" src={require("../../assets/logo-aniflix-.png")} />
   </div>
   {!hideMenu && (<div class="col-8">
    <ul class="menu-list">
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
     <button className="btn btn-md btn-danger btn-login">login</button>
     <button class="btn btn-md btn-config text-center">
      <span class="mdi mdi-menu"></span>
      
     </button>
    </ul>

   </div>)}

  </header>
 );
};

export default Header;