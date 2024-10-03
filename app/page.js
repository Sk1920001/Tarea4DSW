import Image from 'next/image';
import Link from "next/link";


function LandingPage() { //Las funciones retornar un elemento solamente (envolver todo en un div)
  return (
    <div>
      <div className="header">
        <h1>Bienvenido a mi página de recetas</h1>
        <p>Aquí encontrarás delicias culinarias de todo tipo.</p>
      </div>
      <div class="container">


        <div className="landingpage-items">
          <h2>Pastel de Choclo</h2>
          <Image src="/pastel_choclo.jpg" width ={500} height={300} alt="Pastel de Chochlo"/>
          <p className="justify-text">El pastel de choclo es un plato tradicional de la gastronomía chilena, conocido por su sabor reconfortante y su mezcla de ingredientes dulces y salados. Se compone principalmente de una capa de choclo (maíz) molido y cocido que cubre un relleno sabroso.
          <Link href="/pastel_choclo">
            Haga click aquí.
          </Link>
          </p>
        </div>


        <div className="landingpage-items">
          <h2>Charquican</h2>
          <Image src="/charquican.jpg" width ={500} height={300} alt="Charquican"/>
          <p className="justify-text">El charquicán es un plato tradicional de la gastronomía chilena y andina, muy apreciado por su sencillez y sabor reconfortante. Es un guiso hecho a base de verduras como papas, zapallo (calabaza), choclo (maíz), zanahorias, porotos verdes (judías verdes) y cebolla, que se cocinan junto con algún tipo de carne, como carne de res.
            <Link href = "/charquican">
              Haga click aquí.
            </Link>
          </p>
        </div>

        <div className="landingpage-items">
          <h2>Carbonada</h2>
          <Image src="/carbonada.jpg" width ={500} height={300} alt="Carbonada"/>
          <p className="justify-text">La carbonada chilena es un plato tradicional de la cocina chilena, caracterizado por ser un guiso nutritivo y reconfortante, especialmente popular en los meses fríos. Consiste en una mezcla de carne, generalmente de res, cortada en cubos, acompañada de diversas verduras y hortalizas, todo cocido en un caldo sabroso.
            <Link href="/carbonada">
              Haga click aquí.
            </Link>
          </p>
        </div>

      </div>
      <div className="landing-page-footer">
        <h1>¡Proximamente más recetas!</h1> 
      </div>

    </div>
    
  );
}

// Exportar la función por defecto
export default LandingPage;
