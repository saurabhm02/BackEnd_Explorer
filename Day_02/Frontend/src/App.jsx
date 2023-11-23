import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() =>{
    axios.get('/api/jokes')
    .then((response) =>{
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  });
  return (
    <>
        <h1>Learn Backend</h1>
        <p>Jokes : {jokes.length}</p>

        {
          jokes.map((joke) =>{

            return(
              <div key={joke?.id} className="jks">
                <h3>{joke?.name}</h3>
                <p>{joke?.joke}</p>
              </div>
            )
          })
        }
    </>
  )
}

export default App
