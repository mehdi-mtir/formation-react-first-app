
import Comment from './components/Comment'

function App(){
  const commentaires = [
    {
      name : "Stevie Feliciano",
      photo : "https://semantic-ui.com/images/avatar/small/stevie.jpg",
      datePublication : "12/09/2022",
      evaluation : "5",
      texte : "Premier commentaire!"
    },
    {
      photo : "https://semantic-ui.com/images/avatar/small/joe.jpg",
      datePublication : "12/10/2022",
      evaluation : "4",
      texte : "Hello!"
    },
    {
      name : "Steve Jobes",
      photo : "https://semantic-ui.com/images/avatar/small/steve.jpg",
      datePublication : "23/08/2022",
      evaluation : "5",
      texte : "Bonjour!"
    },
    {
      name : "Elliot Fu",
      photo : "https://semantic-ui.com/images/avatar/small/elliot.jpg",
      datePublication : "30/04/2022",
      evaluation : "3",
      texte : "Dernier commentaire!"
    }
  ];
  return (
    <>
    <h1>Liste de commantaires</h1>
    {
      commentaires.map(
        commentaire=><Comment
          name={commentaire.name}
          photo={commentaire.photo}
          datePublication = {commentaire.datePublication}
          evaluation = {commentaire.evaluation}
          texte = {commentaire.texte}
        />
      )
    }

    </>
  )
}

export default App;
