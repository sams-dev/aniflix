const Hero = () => {

 return (
  <div id="hero" class="container-fluid">
   <div class="box-text">
    <div id="infos-hero" class="row">
     <div class="col-6">
      <h1 class="title text-white">Haikyuu: Second Seasson</h1>
      <br />
      <div class="row">
       <button class="col-2 btn btn-lg mr-2 btn-play text-center">
        <span class="mdi mdi-play"></span>
        Assistir
       </button>
       <button data-bs-toggle="modal" data-bs-target="#modal-filme-destaque" class="col-4 btn btn-lg btn-custom-translucent text-center">
        <span class="mdi mdi-information-outline"></span>
        Mais Informações
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Hero;