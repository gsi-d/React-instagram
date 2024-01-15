import Sugestao from "./Sugestao"

export default function Sugestoes(){
    const suggestions = [
      { name: "bad.vibes.memes", image: "assets/img/bad.vibes.memes.svg", reason: "Segue você" },
      { name: "chibirdart", image: "assets/img/chibirdart.svg", reason: "Segue você" },
      { name: "razoesparaacreditar", image: "assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram" },
      { name: "adorable_animals", image: "assets/img/adorable_animals.svg", reason: "Segue você" },
      { name: "smallcutecats", image: "assets/img/smallcutecats.svg", reason: "Segue você" }
    ]
    return(
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {suggestions.map((s) => <Sugestao name={s.name} image={s.image} reason={s.reason}/>)}
          </div>
    )
}