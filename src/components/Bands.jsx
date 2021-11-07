import React from 'react';


const Bands = ({setBandId , setGenreId,todos}) => {


  const getId = (id,genre)=>{
      setBandId (id);
      setGenreId(genre);
      
     
  }

  

    return (
        <div className= "bands-container">

            <h2>Bands</h2>
        <ul>
           {!todos ? "Loading" :
           
           todos.map ((todos,id) =>{
               return <li><span onClick = {()=> getId(todos.id , todos.genreCode)}> {todos.name}</span></li>
           }) // Here i list all the bands from the api
           
           
           }
           
        </ul>
        </div>
        
        
        
        );
}
 
export default Bands;