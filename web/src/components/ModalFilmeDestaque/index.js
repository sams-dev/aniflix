import Episodeo from "../Episodeo";

const ModalFilmeDestaque = () => {

 return (
  <div class="modal fade" id="modal-filme-destaque">
   <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     <div class="modal-hero">
      <div class="container-fluid">
       <div class="row">
        <div class="col-4">
         <div class="card card-modal">
          <img src={require("../../assets/hky.jpg")} />
          <h1> HAIKYUU 2 SEASSON
           <text>2014</text>
          </h1>
          <p>genero <text>ESPORTE DRAMA</text>
           <br />
           <label class="score">score 8.64</label>
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
           Sinopse: Inspirado depois de assistir a um ás de vôlei apelidado de "Little Giant" em ação, Shouyou Hinata, de pequena estatura, revive o clube de vôlei em sua escola secundária. A equipe recém-formada chega a um torneio; no entanto, a primeira partida acaba sendo a última, quando são brutalmente esmagadas pelo "rei da corte", Tobio Kageyama. Hinata promete superar Kageyama e, depois de se formar no ensino médio, ele se junta ao time de vôlei da Karasuno High School - apenas para descobrir que seu rival jurado, Kageyama, agora é seu companheiro de equipe. Graças à sua baixa estatura, Hinata luta para encontrar seu papel na equipe, mesmo com seu poder de salto superior. Surpreendentemente, Kageyama tem seus próprios problemas com os quais apenas Hinata pode ajudar, e aprender a trabalhar juntos parece ser a única maneira de a equipe ter sucesso. Baseado no popular mangá shounen de Haruichi Furudate, de mesmo nome, Haikyuu !! é uma comédia esportiva emocionante e emocional que segue dois atletas determinados enquanto tentam consertar uma rivalidade acalorada para formar seu time de vôlei do ensino médio o melhor do Japão.
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
              <option>Temporada 2</option>
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

export default ModalFilmeDestaque;