
import UserCard from './components/UserCard'
import './App.css'

function App() {
  
   const users=[
        {names:"Harshali" ,bio:"Frontend Developer" },
        {names:"Ram" ,bio:"Backend Developer" ,role:"Admin"},
        {names:"Rohit" ,bio:"Frontend Developer" ,role:"Admin"},
      ];

  return (
    <div className='container'>
      
     {
     /* <UserCard name="Harshali" bio="Frontend Developer" role="Admin"/>
      <UserCard name="Ram" bio="Backend Developer"/>
      <UserCard name="Harshali" bio="Fullstack Developer"/> */
      }

     {users.map( (user,index)=>(
        <UserCard key={index} user={user}/>
     ))}
     

    </div>
  )
}

export default App