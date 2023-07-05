import Header from "../../components/Header";

const Login = () => {
  return (
    <div className="container-fluid bg-animes">
      <Header hideMenu />
      <main>
        <div className="row justify-content-center">
          <div className="col-8 darkbox">
            <h1 className="text-white">Entrar</h1>
            <br />
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg bg-secondary"
                  placeholder="Email ou numero de telefone"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg bg-secondary"
                  placeholder="Senha"
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-lg btn-danger">Entrar</button>
                <div className="row mt-3">
                  <div className="col text-muted">
                    <input type="checkbox" /> Lembre-se de mim
                  </div>
                  <div className="col text-end">
                    <a href="#" className="text-muted">
                      Precisa de ajuda?
                    </a>
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
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default Login;
