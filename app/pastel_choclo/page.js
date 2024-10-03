import Image from "next/image" 

function page(){
  return(
    <div>
      <div className="header">
        <h1>Increíble receta de Pastel de Choclo</h1>
        <p>¡Para sorprender a tu familia!</p>
      </div>

        <div class="container">


          <div className="recipe-column">

            <h2>Ingredientes:</h2>
            
            <h2>Para la mezcla de choclo (parte superior):</h2>
            <ul>
                <li>8-10 choclos (mazorcas de maíz) frescos o 1 kg de choclo congelado.</li>
                <li>2-3 cucharadas de mantequilla.</li>
                <li>1 taza de leche.</li>
                <li>1 cucharada de azúcar.</li>
                <li>Sal y pimienta al gusto.</li>
                <li>Albahaca fresca (opcional) al gusto, finamente picada.</li>
            </ul>

            <h2>Para el relleno de pino (carne y pollo):</h2>
            <ul>
                <li>400 g de carne de res molida o cortada en pequeños trozos.</li>
                <li>2 pechugas de pollo cocidas y desmenuzadas.</li>
                <li>1 cebolla grande, picada en cubitos.</li>
                <li>2-3 huevos duros, cortados en mitades o cuartos.</li>
                <li>Aceitunas negras (cantidad al gusto).</li>
                <li>2 cucharadas de aceite.</li>
                <li>Sal, pimienta, y comino al gusto.</li>
                <li>Pasas al gusto.</li>
            </ul>

            <h2>Instrucciones:</h2>

            <h3>1. Preparar la mezcla de choclo (maíz):</h3>
            <p>Si usas choclos frescos, desgranarlos con un cuchillo. Si usas choclo congelado, descongélalo previamente.</p>
            <p>Muele los granos de choclo con una procesadora o licuadora, agregando un poco de leche si es necesario para facilitar el proceso.</p>
            <p>En una olla grande, derrite la mantequilla a fuego medio y agrega el choclo molido.</p>
            <p>Añade la leche, una pizca de sal, pimienta, y el azúcar. Cocina a fuego medio, revolviendo constantemente para que no se pegue. Debe quedar como una mezcla espesa.</p>
            <p>Si lo prefieres, añade la albahaca picada para darle un sabor más tradicional.</p>
            <p>Cocina durante unos 10-15 minutos hasta que espese y los sabores se integren.</p>

            <h3>2. Preparar el pino (relleno de carne):</h3>
            <p>En una sartén grande, calienta el aceite y sofríe la cebolla picada hasta que esté transparente (unos 5 minutos).</p>
            <p>Añade la carne de res molida o en trozos pequeños y sazona con sal, pimienta, y comino. Cocina hasta que la carne esté bien dorada.</p>
            <p>Cocina las pechugas de pollo (si no lo has hecho antes) y desmenúzalas.</p>
            <p>Retira del fuego y mezcla con las pasas, aceitunas negras, y los huevos duros.</p>

            <h3>3. Ensamblar el pastel de choclo:</h3>
            <p>Precalienta el horno a 200°C (392°F).</p>
            <p>En una fuente grande y honda para horno, coloca primero una capa de pino (carne) en la base.</p>
            <p>Encima de la carne, distribuye los trozos de pollo desmenuzado.</p>
            <p>Agrega los huevos duros y las aceitunas al gusto.</p>
            <p>Cubre todo con la mezcla de choclo.</p>
            <p>Espolvorea un poco de azúcar sobre la superficie (esto ayuda a caramelizar el choclo en el horno).</p>

            <h3>4. Hornear:</h3>
            <p>Lleva al horno precalentado durante unos 20-25 minutos o hasta que la parte superior esté dorada y ligeramente caramelizada.</p>
            <p>Si deseas un dorado más intenso, puedes usar el grill del horno por unos minutos al final, vigilando que no se queme.</p>

            <h3>5. Servir:</h3>
            <p>Deja reposar el pastel por unos minutos antes de servir.</p>
            <p>Sirve caliente, acompañado de una ensalada fresca o solo.</p>

            <h2>Notas:</h2>
            <ul>
                <li>El pastel de choclo tradicionalmente se cocina en poteros de greda (platos de barro), lo que le da un sabor especial, pero también puedes usar cualquier fuente para horno.</li>
                <li>La albahaca es opcional, pero le da un toque fresco y aromático muy apreciado en la cocina chilena.</li>
            </ul>
          </div>

          <div class="image-container">
            <Image  src="/pastel-choclo1.jpg" width ={800} height={500}/>
            <Image  src="/pastel-choclo2.jpg" width ={800} height={500}/>
            <Image  src="/pastel-choclo3.jpg" width ={800} height={500}/>
          </div>


        </div> 
    </div>
  );
}

export default page;
