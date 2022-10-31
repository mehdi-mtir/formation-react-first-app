import React from 'react';
import Comment from './components/Comment'
import Card from './components/Card';


class App extends React.Component{
  state = {
    commentaires : [
      {
        id : 1,
        name : "Stevie Feliciano",
        photo : "https://semantic-ui.com/images/avatar/small/stevie.jpg",
        datePublication : "12/09/2022",
        evaluation : "5",
        texte : "Premier commentaire!",
        etat : "En attente"
      },
      {
        id : 2,
        name : "Tom Lukic",
        photo : "https://semantic-ui.com/images/avatar/small/joe.jpg",
        datePublication : "12/10/2022",
        evaluation : "4",
        texte : "Hello!",
        etat : "En attente"
      },
      {
        id : 3,
        name : "Steve Jobes",
        photo : "https://semantic-ui.com/images/avatar/small/steve.jpg",
        datePublication : "23/08/2022",
        evaluation : "5",
        texte : "Bonjour!",
        etat : "En attente"
      },
      {
        id : 4,
        name : "Elliot Fu",
        photo : "https://semantic-ui.com/images/avatar/small/elliot.jpg",
        datePublication : "30/04/2022",
        evaluation : "3",
        texte : "Dernier commentaire!",
        etat : "En attente"
      }
    ]
  };

  editEtatCommentaire = (id, nouvelEtat)=>{
    this.setState({commentaires : this.state.commentaires.map(
      c => {
        if(c.id === id){
          return {...c, etat : nouvelEtat}
        }
        else{
          return {...c};
        }
      }
    )});
  }

  render(){
    return (
      <>
      <h1>Liste de commantaires</h1>
      {
        this.state.commentaires.map(
          commentaire=>
          <Card
            key={commentaire.id}
            editEtatCommentaireRef = {this.editEtatCommentaire}>
            <Comment
            id = {commentaire.id}
            name={commentaire.name}
            photo={commentaire.photo}
            datePublication = {commentaire.datePublication}
            evaluation = {commentaire.evaluation}
            texte = {commentaire.texte}
            etat = {commentaire.etat}
            />
          </Card>
        )
      }
      </>
    )
  }
}

export default App;
