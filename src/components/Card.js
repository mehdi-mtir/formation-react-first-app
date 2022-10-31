
function Card(props){
  /*const showApproval = (id, approval)=>{
    console.log(`le commentaire ${id} est ${approval}`)
  }*/

  //console.log(props);
  return (
    <div className="ui cards">
  <div className="card">
    <div className="content">
      {props.children}
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button" onClick={()=>props.editEtatCommentaireRef(props.children.props.id, "appouvé")} >Approve</div>
        <div className="ui basic red button" onClick={()=>props.editEtatCommentaireRef(props.children.props.id, "décliné")}>Decline</div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Card;
