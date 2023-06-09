import Episodeo from "../Episodeo";

const ModalFilme = () => {

 return (
  <div class="modal fade" id="modal-filme">
   <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     <div class="modal-hero">
      <div class="container-fluid">
       <div class="row">
        <div class="col-4">
         <div class="card card-modal">
          <img src={require("../../assets/img-card500x500.jpg")} />
          <h1> BLUE LOCK
           <text>2022</text>
          </h1>
          <p>genero <text>ESPORTE DRAMA</text>
           <br />
           <label class="score">score 8.36</label>
           <button type="button" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#modal-filme">
            <span class="mdi mdi-chevron-up"></span>
           </button>
           <span class="mdi mdi-bookmark"></span>
           <span class="mdi mdi-heart"></span>
          </p>
         </div>
        </div>
        <div class="col-8">
         <div class="sinopse">
          <p class="text-light">
           Sinopse: Yoichi Isagi estava a poucos momentos de marcar um gol que teria enviado seu time de
           futebol do
           ensino médio para os nacionais, mas uma decisão em uma fração de segundo de passar a bola para seu
           companheiro
           de equipe custou-lhe essa realidade. Amargurado, confuso e desapontado, Isagi se pergunta se o
           resultado teria
           sido diferente se ele não tivesse feito o passe. Quando o jovem atacante volta para casa, um convite
           da
           Federação Japonesa de Futebol o aguarda. Por meio de um processo de tomada de decisão arbitrário e
           tendencioso, Isagi é um dos trezentos atacantes sub-18 selecionados para um projeto polêmico chamado
           Blue
           Lock. O objetivo final do projeto é transformar um dos jogadores selecionados no artilheiro da
           seleção
           japonesa. Para encontrar o melhor participante, cada diamante bruto deve competir contra outros
           através de uma
           série de competições individuais e em equipe para chegar ao topo. Deixando de lado suas objeções
           éticas ao
           projeto, Isagi se sente compelido a lutar para chegar ao topo, mesmo que isso signifique esmagar
           impiedosamente os sonhos de 299 jovens aspirantes a atacantes.
          </p>
         </div>
         <div class="modal-infos">
          <div class="container-fluid">
           <div class="row ep-group">
            <div class="col-10">
             <h2 class="text-white">
              <div class="dropdown-center">
               <button id="eps" class="btn btn-dark" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Episodios <span id="icon" class="mdi mdi-chevron-down"></span>
               </button>
               <ul class="dropdown-menu lista-episodios">
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
                <Episodeo/>
               </ul>
              </div>
             </h2>
            </div>
            <div class="col-2 text-right">
             <select id="temps" class="form-control">
              <option>Temporada 1</option>
             </select>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ModalFilme;