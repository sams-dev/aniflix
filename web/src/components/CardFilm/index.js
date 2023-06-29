const CardFilm = () => {

 return (
  <li class="filme">
   <div class="card col-5">
    <img src={require("../../assets/img-card500x500.jpg")} />
    <h1> BLUE LOCK
     <text className="text-rigth" >2022</text>
    </h1>
    <p>genero <text>ESPORTE DRAMA</text>
     <br />
     <label class="score">score 8.36</label>
     <button type="button" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#modal-filme">
      <span class="mdi mdi-chevron-down"></span>
     </button>
     <span class="mdi mdi-bookmark"></span>
     <span class="mdi mdi-heart"></span>
    </p>
   </div>
  </li>
 );
};

export default CardFilm;