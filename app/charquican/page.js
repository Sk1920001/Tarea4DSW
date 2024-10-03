import Image from "next/image" 

function page(){
  return(
    <div>
      <div className="header">
        <h1>Deliciosa receta de Charquican</h1>
        <p>¡Para sorprender a tu familia!</p>
      </div>

        <div class="container">


          <div className="recipe-column">
            <h1>Receta de Charquicán</h1>

            <h2>Ingredientes:</h2>
            <ul>
                <li>500 gramos de carne (puede ser vacuno o charqui)</li>
                <li>3 papas medianas</li>
                <li>1 zapallo pequeño</li>
                <li>1 cebolla</li>
                <li>1 zanahoria</li>
                <li>1 taza de choclo desgranado</li>
                <li>1 taza de arvejas</li>
                <li>1 diente de ajo</li>
                <li>Ají de color (opcional)</li>
                <li>Sal, pimienta y comino al gusto</li>
                <li>1 taza de agua o caldo de verduras</li>
                <li>Aceite para freír</li>
            </ul>

            <h2>Instrucciones:</h2>
            <ol>
                <li>Pelar y cortar en cubos las papas, el zapallo y la zanahoria. Reservar.</li>
                <li>En una olla grande, calentar un poco de aceite y sofreír la cebolla picada en cubos pequeños y el ajo picado finamente.</li>
                <li>Añadir la carne cortada en cubos y cocinar hasta que se dore.</li>
                <li>Agregar el ají de color, sal, pimienta y comino. Revolver bien para que todo se mezcle.</li>
                <li>Incorporar las papas, el zapallo, la zanahoria, el choclo y las arvejas. Añadir la taza de agua o caldo de verduras.</li>
                <li>Tapar la olla y cocinar a fuego medio hasta que las verduras estén tiernas (aproximadamente 20-25 minutos).</li>
                <li>Cuando todo esté cocido, machacar suavemente los ingredientes con una cuchara de palo para lograr una textura más espesa, pero sin que todo se deshaga completamente.</li>
                <li>Ajustar la sazón si es necesario y servir caliente.</li>
            </ol>


          </div>

          <div class="image-container">
            <Image  src="/charquican1.jpg" width ={800} height={500}/>
          </div>

        </div> 
    </div>
  );
}

export default page;
