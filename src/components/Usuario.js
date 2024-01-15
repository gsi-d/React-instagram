export default function Usuario(props){
  
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
              <strong>{props.userName}</strong>
              <span>
                {props.name}
                <ion-icon onClick={props.alteraName} name="pencil"></ion-icon>
              </span>
            </div>
          </div>
    )
}