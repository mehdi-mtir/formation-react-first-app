
function Comment(props){
  //console.log(props);
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img src={props.photo} />
        </a>
        <div className="content">
          <a className="author">{props.name}</a>
          <div className="metadata">
            <div className="date">{props.datePublication}</div>
            <div className="rating">
              <i className="star icon"></i>
              {props.evaluation} Faves
            </div>
          </div>
          <div className="text">
            {props.texte}
            <p>Etat : {props.etat}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment;
