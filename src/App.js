import React, {useState,Fragment,useEffect} from 'react';
import Login from './components/Login';
import Bands from './components/Bands';
import Info from './components/Info'; 



function App() {

  const [log, setLog] = useState (false); //this state is to handle the login "wall"
  const [bandId,setBandId]= useState ();
  const [genreId, setGenreId] = useState ();
  const [todos, setTodos] = useState ();
  const [albums,setAlbums]= useState ();
  const [bandGenre,setBandGenre] = useState();



    const apiCall = async () => {
        const apiBand = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands');
        const apiGenre = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/genre');
        const apiAlbum = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/albums');
        const requestBand = await apiBand.json();
        const requestGenre = await apiGenre.json();
        const requestAlbum = await apiAlbum.json();
        setTodos (requestBand);
        setBandGenre (requestGenre);
        setAlbums (requestAlbum);     //I couldn't handle the db api, so i called the other three
    
    }

    useEffect (()=>{
        apiCall();
    },[]);


  const logOut= () => {
    setLog (false);
    setBandId(null);
  }

  return (
    <Fragment>
      {log ? 
      
     
      <div>
         <nav>
           <button className= "btn-logout" onClick={()=>logOut ()}>Log Out</button>
         </nav>
      <div className="bands-grid">

        <div>
          <Bands
            setBandId = {setBandId}
            setGenreId = {setGenreId}
            todos= {todos}
          
          ></Bands>
        </div>
        <div>

          {bandId? 
          <Info
            bandId = {bandId}
            todos={todos}
            genreId ={genreId}
            bandGenre={bandGenre}
            albums={albums}
          ></Info>
          :null}
        </div>
      </div>

      </div>
      
      
      
      
      
      :
       <Login
       setLog={setLog}
     ></Login>
      }
     
    </Fragment>
      
    
        

     

    
   
  );
}

export default App;
