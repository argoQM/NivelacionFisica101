import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Swal from "sweetalert2";
function App() {
  // Swal.fire({
  //   title: `Bienvenidos al Curso de Nivelación de Física 101
  //               El objetivo principal de la creación de este material de apoyo dirigido a estudiantes universitarios es facilitar la comprensión y el dominio de conceptos fundamentales como vectores y sus propiedades, cinemática, dinámica, trabajo y energía, proporcionar una base sólida y estructurada que permita a los estudiantes abordar problemas complejos con confianza y precisión.
  //               Buscamos fomentar el interés y la motivación hacia el estudio de la Física mediante la inclusión de ejemplos prácticos y aplicaciones reales que demuestren la relevancia de estos temas en el mundo actual. La creación de este recurso también responde a la necesidad de ofrecer herramientas didácticas que apoyen el aprendizaje autónomo y colaborativo, promoviendo así un entorno educativo más dinámico y participativo.`,
  //   width: 1200,
  //   padding: "1em",
  //   color: "#614bfa",
  //   background: "#f4f4f4 ",
  //   backdrop: ` #f0a3a38f`,
  //   customClass: {
  //     title: "titulo-personalizado",
  //   },
  // });

  return (
    <div className="bg-fondoPrincipal text-texto  text-center overflow-x-hidden selection:bg-naranjaO/30 ">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
// className="bg-pink-400 sm:bg-red-200 md:bg-blue-400 lg:bg-green-600 xl:bg-violet-800/50 "
export default App;
