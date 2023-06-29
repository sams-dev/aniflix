import CardFilm from "../CardFilm";

const SectionFilmes = () => {

 return (
  <section>
   <div class="container">
    <div class="row">
     <div class="col-12">
      <h4 class="text-white">Populares</h4>
     </div>
    </div>
   </div>
   <div class="col-12">
    <ul class="list-filmes">
     <CardFilm/>
     <CardFilm/>
     <CardFilm/>
     <CardFilm/>
     <CardFilm/>
     <CardFilm/>
     
    </ul>
   </div>
  </section>
 );
};

export default SectionFilmes;