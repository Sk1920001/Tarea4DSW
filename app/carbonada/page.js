import Image from "next/image" 

function page(){
  return(
    <div>
      <div className="header">
        <h1>Increíble receta de Carbonada</h1>
        <p>¡Para sorprender a tu familia!</p>
      </div>

        <div class="container">


          <div className="recipe-column">

            <h1>Receta de Carbonada Chilena</h1>

            <h2>Ingredientes:</h2>
            <ul>
                <li>500 gramos de carne de vacuno (cortada en cubos pequeños)</li>
                <li>1 cebolla mediana</li>
                <li>3 papas medianas</li>
                <li>2 zanahorias</li>
                <li>1 taza de zapallo (cortado en cubos)</li>
                <li>1 taza de arvejas</li>
                <li>1 taza de choclo desgranado</li>
                <li>1 pimiento rojo</li>
                <li>1 diente de ajo</li>
                <li>1 cucharada de aceite</li>
                <li>1 litro de caldo de carne o agua</li>
                <li>Sal, pimienta y orégano al gusto</li>
            </ul>

            <h2>Instrucciones:</h2>
            <ol>
                <li>En una olla grande, calentar el aceite a fuego medio y dorar la carne en cubos pequeños.</li>
                <li>Agregar la cebolla picada y el ajo, sofriendo hasta que estén tiernos y dorados.</li>
                <li>Añadir las papas, zanahorias, pimiento y zapallo, todos cortados en cubos. Revolver bien.</li>
                <li>Incorporar el caldo de carne o agua hasta cubrir los ingredientes. Llevar a ebullición.</li>
                <li>Una vez que hierva, bajar el fuego y cocinar a fuego lento durante unos 15 minutos o hasta que las verduras estén tiernas.</li>
                <li>Agregar las arvejas y el choclo. Continuar cocinando por otros 10 minutos.</li>
                <li>Sazonar con sal, pimienta y orégano al gusto. Ajustar los condimentos según prefieras.</li>
                <li>Servir caliente. ¡Disfruta de tu deliciosa carbonada chilena!</li>
            </ol>

          </div>

          <div class="image-container">
            <Image  src="/carbonada1.jpg" width ={800} height={500}/>
          </div>

        </div> 
    </div>
  );
}

export default page;
