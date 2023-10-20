import './App.css'

// const kids = ['kid1', 'kid2', 'kid3', 'kid4'] 
const kids = []


function List(props) {

  if (!props.kids) {
    return <p>no kids at all :/</p>
  }

  if (props.kids.length === 0) return (
    <p>no kids here :o</p>
  )


  return (
  <ul>
    {props.kids.map((kid) => {
      return <li key={kid}>{kid}</li>
    })}

  </ul>
  )
}

function ListItem(props) {

}





function App() {

  return (
    <>
    <h1>My first react APPLICATION!</h1>
    <h2 className='test'>you dont need react for a simple website!</h2>
    <h3>react is for applications that have dynamic information and lots of state!</h3>
    <List kids={kids}/>
    </> 
  )
}

export default App
