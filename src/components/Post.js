import { useState } from "react"

export default function Post(props){
  const [salvo, setSalvo] = useState(true)
  const [iconSalvo, setIconSalvo] = useState("bookmark-outline")
  const [liked, setLiked] = useState(true)
  const [counterLiked, setCounterLiked] = useState(props.initialLikesAmount)
  const [animation, setAnimation] = useState(false)

  function salvaPost(){
    if(salvo === true){
      setIconSalvo("bookmark")
    }else{
      setIconSalvo("bookmark-outline")
    }
    setSalvo(!salvo);
  }

  function clickLiked(){
    if(liked === true){
      setCounterLiked(counterLiked + 1)
    }else{
      setCounterLiked(counterLiked - 1)
    }
    setLiked(!liked);
  }

  function clickImagem(event){
    if(event.detail === 2){
      setAnimation(true)
      if(liked === true){
        setCounterLiked(counterLiked + 1)
        setLiked(!liked);
      }
      setTimeout(() => {setAnimation(false)}, 500)
    }
  }

    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.userImage} />
                  {props.userName}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div onClick={clickImagem} class="conteudo">
                <ion-icon class={`coracao ${animation ? "scale-up-center" : "invisible"}`} name="heart"></ion-icon>
                <img src={props.contentImage} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon onClick={clickLiked} class={!liked ? "icon-liked" : ""} name={!liked ? "heart" : "heart-outline"}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon onClick={salvaPost} name={iconSalvo}></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.likedByImage} />
                  <div class="texto">
                    Curtido por <strong>{props.likedByText}</strong> e <strong>outras {counterLiked} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}