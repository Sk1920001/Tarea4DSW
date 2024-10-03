import Image from "next/image"

function page({params}) {
  return(
    <div>
    <div className="header">
    <h1>Error al iniciar sesión</h1>
    <p>Usted está tratando de iniciar la sesión del usuario : <strong>{params.id}</strong>, y no tiene los permisos para hacerlo.</p>
    </div>
    <div className="error-image">
    <Image src="/perrotriste.jpeg" width={1024} height={576}/>
    </div>


    </div>
  );
  
}

export default page;
