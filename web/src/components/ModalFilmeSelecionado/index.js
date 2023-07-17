import '../ModalFilmeSelecionado/style.css'

const ModalFilmeSecionado = () => {
  return (
    <div className="modal fade" id="modal-filmeS">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <iframe width="100%" height="100%"
        src="https://www.youtube-nocookie.com/embed/ii-KRRt13o4" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
        allowfullscreen>

        </iframe>
        </div>
      </div>
    </div>
  );
}

export default ModalFilmeSecionado;
