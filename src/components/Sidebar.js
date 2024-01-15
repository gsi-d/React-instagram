import { useState } from "react";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar(){
  const [name, setName] = useState("Catana")

  function alteraName(){
    let novoName = prompt('Informe o novo login:');
    if(name != null){
      setName(novoName)
    }
  }
  
    return(
        <div class="sidebar">
            <Usuario image={"assets/img/catanacomics.svg"} userName={"catanacomics"} name={name} alteraName={alteraName}/>
            <Sugestoes/>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}

