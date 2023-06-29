import ModalFilme from "../../components/ModalFilme";
import ModalFilmeDestaque from "../../components/ModalFilmeDestaque";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SectionFilmes from "../../components/SectionFilmes";

const Home = () => {

 return (
  <>
  <ModalFilme/>

  <ModalFilmeDestaque/> 

   <div class="container-fluid div-home">
    <Header/>
    <Hero/>
    <div class="main-content">
    <SectionFilmes/>
    </div>
   </div>
  </>
 );
};

export default Home;