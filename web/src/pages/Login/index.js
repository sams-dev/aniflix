import Header from "../../components/Header";


const Login = () => {

 return (
	<div className="container-fluid bg-animes">
  <Header/>
  <main>
   <div className="col-4 offset-4 darkbox">
    <h1 className="text-white">Entrar</h1>
    <br />
    <form>
     <input type="email" className="form-control form-control-lg bg-secondary" placeholder="Email ou numero de telefone" />
     <br />
     <input type="password" className="form-control form-control-lg bg-secondary" placeholder="Senha" />
     <br />
     <br />
     <div className="d-grid gap-2">
      <button className="btn btn-lg btn-danger">Entrar
      </button>
      <div className="row mt-3">
       <div className="col text-muted">
        <input type="checkbox" /> Lembre-se de mim
       </div>
       <div className="col text-end">
        <a href="#" className="text-muted">Precisa de ajuda?</a>
       </div>
      </div>
      <div className="row">
       <div className="col btn-singup">
        <span>Novo por aqui?</span>
        <button className="btn text-white">Crie a sua conta</button>
       </div>
      </div>
     </div>
    </form>
   </div>
  </main>
		<footer className="footer"></footer>
 </div>
 );
};

export default Login;