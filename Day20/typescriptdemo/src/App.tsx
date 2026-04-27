
import Button from "./components/Button"
import Greet from "./components/Greet"
import Person from "./components/Person"
//import PersonList from "./components/PersonList"
import Status from "./components/Status"
import UseStates from "./components/states/UseStates"

function App() {
  

 
    const personName={
        first:'harshali',
        last:'patil'
    }

    const nameList =[
      {
        first: 'Harsh',
        last: 'Patil'
      },
      {
        first: 'Abcd',
        last: 'pqrs'
      },
      {
        first:'hjhkj',
        'last':'gj'
      }
    ]

     return (

    <>
      <Greet name="harshali" messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
     
      <Status status='loading'/>
      <Button/>
      <UseStates />
    </>
  )
}

export default App
