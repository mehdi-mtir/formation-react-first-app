
import Comment from './components/Comment'
import Card from './components/Card';

function App(){
  const commentaires = [
    {
      id : 1,
      name : "Stevie Feliciano",
      photo : "https://semantic-ui.com/images/avatar/small/stevie.jpg",
      datePublication : "12/09/2022",
      evaluation : "5",
      texte : "Premier commentaire!"
    },
    {
      id : 2,
      name : "Tom Lukic",
      photo : "https://semantic-ui.com/images/avatar/small/joe.jpg",
      datePublication : "12/10/2022",
      evaluation : "4",
      texte : "Hello!"
    },
    {
      id : 3,
      name : "Steve Jobes",
      photo : "https://semantic-ui.com/images/avatar/small/steve.jpg",
      datePublication : "23/08/2022",
      evaluation : "5",
      texte : "Bonjour!"
    },
    {
      id : 4,
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
    <Card>
      <Comment name="test"
          photo="test"
          datePublication = "test"
          evaluation = "test"
          texte = "test"
      />
    </Card>
    {
      commentaires.map(
        commentaire=><Comment
          key={commentaire.id}
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
