
import Comment from './components/Comment'

function App(){
  return (
    <>
    <h1>Liste de commantaires</h1>
    <Comment
      name="Stevie Feliciano"
      photo="https://semantic-ui.com/images/avatar/small/stevie.jpg"
      />
    <Comment
      name="Tom Lukic"
      photo="https://semantic-ui.com/images/avatar/small/joe.jpg"
      />
    <Comment
      name="Steve Jobes"
      photo="https://semantic-ui.com/images/avatar/small/steve.jpg"
      />
    <Comment
      name="Elliot Fu"
      photo="https://semantic-ui.com/images/avatar/small/elliot.jpg"
      />
    </>
  )
}

export default App;
